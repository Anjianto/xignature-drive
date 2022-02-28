<?php

namespace App\Http\Controllers\Auth;

use App\Http\Requests\Auth\CheckAccountRequest;
use App\Setting;
use App\User;
use App\UserSettings;
use App\Services\SignatureService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Validator;

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
     * @response 404 {"We can't find a user with that e-mail address."}
     * @response 200 {
     * "name": "Nur Wachid",
     * "avatar": "https://drive.xignature.co.id/assets/images/default-avatar.png"
     * }
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
                'name' => $user->name,
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
     * @response {"Login Successfull!"}
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
     * @bodyParam password_confirmation string  required The password of the user. Example: Pa$$word
     * @bodyParam phone string  required The phone of the user. Example: 085225440120
     * @bodyParam nik string  required The nik of the user. Example: 82328323823232
     * @bodyParam ktp file  required The ktp of the user.
     * @bodyParam selfie file  required The self photo of the user.
     * @bodyParam birth_place string  required The birth place of the user. Example: Jakarta
     * @bodyParam birth_date string  required The birth date of the user. Example: 2000-12-12
     * @response 201 {"Register Successfull!"}
     * @response 400 {"NIK sudah terdaftar pada email pandu.septian@xignature.co.id dan no handphone 085774719951"}
     * @param Request $request
     * @return mixed
     */
    public function register(SignatureService $signService, Request $request)
    {
        $settings = Setting::whereIn('name', ['storage_default', 'registration', 'api_key'])->pluck('value', 'name');

        // Check if account registration is enabled
        if (!intval($settings['registration'])) {
            abort(401);
        }

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
            'phone' => 'required|string|min:12',
            'nik' => 'numeric',
            'ktp' => 'required',
            'selfie' => 'required',
            'birth_date' => 'required|date',
            'birth_place' => 'required|string'
        ]);
        // dd($request->all());
        
        $ktp = base64_encode(file_get_contents($request->file('ktp')));
        $selfie = base64_encode(file_get_contents($request->file('selfie')));
        // dd($request->file('ktp')->store('ktp'));

        $apiResponse = Http::withHeaders([
            'api-key' => $settings['api_key'],
            'Content-Type' => 'application/json',
            'Accept' => 'application/json',
        ])->post(config('app.api') . 'v1/auth/generateLtcToken', [
            "email" => $request->input('email'),
            "fullname" => $request->input('name'),
            "nik" => $request->input('nik'),
            "phone" => $request->input('phone'),
            "birthdate" => $request->input('birth_date'),
            "birthplace" => $request->input('birth_place'),
            "selfie" => $selfie,
            "ktp" => $ktp
        ]);
        
        $apiData = $apiResponse->object();




        if (isset($apiData) && $apiData->statusCode == '200') {
            // Create user
            $user = User::create([
                'name' => $request->input('name'),
                'email' => $request->input('email'),
                'password' => Hash::make($request->input('password')),
                "nik" => $request->input('nik'),
                "phone" => $request->input('phone'),
                "birth_date" => $request->input('birth_date'),
                "birth_place" => $request->input('birth_place'),
                "selfie" => $request->file('selfie')->store('selfie'),
                "ktp" => $request->file('ktp')->store('ktp'),
            ]);

            // Create settings
            UserSettings::forceCreate([
                'user_id' => $user->id,
                'storage_capacity' => $settings['storage_default'],
            ]);

            $sign_doc_key = $request->input('sign_doc_key');	
            $sign_doc_id = $request->input('sign_doc_id');
            $file_id = null;
            if($sign_doc_key && $sign_doc_id){
                $file = $signService->get_file_by_hash($sign_doc_key, $sign_doc_id);

                if($file){
                    $file_id = $file->id;
                }
            }
            $signService->sign($apiData->data->token, $file_id, $user->id);

            $response = Route::dispatch(self::make_login_request($request));

            if ($response->isSuccessful()) {
                $data = json_decode($response->content(), true);
                $user->signatures()->create([
                    'sign_token' => $apiResponse->date->token
                ]);

                return response('Register Successfull!', 200)->cookie('access_token', $data['access_token'], 43200);
            }

            return $response;
        }

        return response($apiResponse->body(), $apiResponse->status());
    }

    /**
     * Logout user entity
     *
     * @authenticated
     * @response {"Logout successful"}
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
            'grant_type' => 'password',
            'client_id' => config('services.passport.client_id'),
            'client_secret' => config('services.passport.client_secret'),
            'username' => $request->email,
            'password' => $request->password,
            'scope' => 'master',
        ]);

        return Request::create(url('/oauth/token'), 'POST', $request->all());
    }
}
