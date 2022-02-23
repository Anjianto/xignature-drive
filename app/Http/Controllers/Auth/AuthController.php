<?php

namespace App\Http\Controllers\Auth;

use App\Http\Requests\Auth\CheckAccountRequest;
use App\Setting;
use App\User;
use App\UserSettings;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;

/**
 * @group Auth
 *
 * Class AuthController
 * @package App\Http\Controllers\Auth
 */
class AuthController extends Controller
{

    /**
     * Check if user account exist
     *
     * unauthenticated
     * @param CheckAccountRequest $request
     * @return mixed
     */
    public function check_account(CheckAccountRequest $request)
    {
        // Get User
        $user = User::where('email', $request->input('email'))->select(['name', 'avatar'])->first();

        // Return user info
        if ($user) {
            return [
            'name'   => $user->name,
            'avatar' => $user->avatar,
        ];
        }

        // Abort with 404, user not found
        return abort('404', __t('user_not_fount'));
    }

    /**
     * Login user
     *
     * @unauthenticated
     * @bodyParam email string  required The email of the user. Example: nur.wachid@example.com
     * @bodyParam password string required  The password of the user. Example: Pas$word
     * @param Request $request
     * @return mixed
     */
    public function login(Request $request)
    {
        $response = Route::dispatch(self::make_login_request($request));

        if ($response->isSuccessful()) {
            $data = json_decode($response->content(), true);

            return response('Login Successfull!', 200)->cookie('access_token', $data['access_token'], 43200);
        }

        return $response;
    }

    /**
     * Register user
     *
     * @unauthenticated
     * @bodyParam name string  required The name of the user. Example: Nur Wachid
     * @bodyParam email string  required The email of the user. Example: nur.wachid@example.com
     * @bodyParam password string  required The password of the user. Example: Pa$$word
     * @bodyParam phone string  required The phone of the user. Example: 085225440120
     * @bodyParam nik string  required The nik of the user. Example: 82328323823232
     * @bodyParam ktp file  required The ktp of the user.
     * @bodyParam selfie file  required The self photo of the user.
     * @bodyParam birth_place string  required The birth place of the user. Example: Jakarta
     * @bodyParam birth_date string  required The birth date of the user. Example: 2000-12-12
     * @param Request $request
     * @return mixed
     */
    public function register(Request $request)
    {
        $settings = Setting::whereIn('name', ['storage_default', 'registration'])->pluck('value', 'name');

        // Check if account registration is enabled
        if (! intval($settings['registration'])) {
            abort(401);
        }

        // Validate request
        $request->validate([
            'name'     => ['required', 'string', 'max:255'],
            'email'    => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:6', 'confirmed'],
            'phone' => ['required', 'string'],
            'nik' => ['numeric'],
            'ktp' => ['required', 'image'],
            'selfie' => ['required', 'image'],
            'birth_date' => ['required', 'date']
        ]);

        // Create user
        $user = User::create([
            'name'     => $request->name,
            'email'    => $request->email,
            'password' => Hash::make($request->password),
        ]);

        // Create settings
        UserSettings::forceCreate([
            'user_id'          => $user->id,
            'storage_capacity' => $settings['storage_default'],
        ]);

        $response = Route::dispatch(self::make_login_request($request));

        if ($response->isSuccessful()) {
            $data = json_decode($response->content(), true);

            return response('Register Successfull!', 200)->cookie('access_token', $data['access_token'], 43200);
        }

        return $response;
    }

    /**
     * Logout user entity
     *
     * @authenticated
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     */
    public function logout()
    {
        // Get user tokens and remove it
        auth()->user()->tokens()->each(function ($token) {

            // Remove tokens
            $token->delete();
        });

        return response('Logout successful', 204)
            ->cookie('access_token', '', -1);
    }

    /**
     * Make login request for get access token
     *
     * @param Request $request
     * @return Request
     */
    private static function make_login_request($request)
    {
        $request->request->add([
            'grant_type'    => 'password',
            'client_id'     => config('services.passport.client_id'),
            'client_secret' => config('services.passport.client_secret'),
            'username'      => $request->email,
            'password'      => $request->password,
            'scope'         => 'master',
        ]);

        return Request::create(url('/oauth/token'), 'POST', $request->all());
    }
}
