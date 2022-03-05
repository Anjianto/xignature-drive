<?php

namespace App\Http\Controllers\User;

use App\Http\Resources\InvoiceCollection;
use App\Http\Resources\ListUserResource;
use App\Http\Resources\UserResource;
use App\Http\Resources\UserStorageResource;
use App\Http\Tools\Demo;
use App\Setting;
use App\User;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

/**
 * @group Account
 *
 * Class AccountController
 * @package App\Http\Controllers\User
 */
class AccountController extends Controller
{
    /**
     * List User for role user
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function list_users()
    {
        return ListUserResource::collection(User::all());
    }
    /**
     * Get all user data to frontend
     *
     * @
     * @return UserResource
     */
    public function user()
    {
        return new UserResource(
            Auth::user()
        );
    }

    /**
     * Get all user data that match search query
     *
     * @
     * @return UserResource
     */
    public function search_user(Request $request)
    {
        $query = $request->email;
        $users = User::where('email', 'like', $query . '%')->get();
        return response()->json([
            'status' => 'success',
            'query' => $query,
            'data' => $users->map(function ($user) {
                return [
                    "avatar" => $user->avatar,
                    "email" => $user->email,
                    "name" => $user->name,
                ];
            })
        ]);
    }

    /**
     * Get storage details
     *
     * @return UserStorageResource
     */
    public function storage()
    {
        return new UserStorageResource(
            Auth::user()
        );
    }

    /**
     * Get user invoices
     *
     * @return InvoiceCollection
     */
    public function invoices()
    {
        return new InvoiceCollection(
            Auth::user()->invoices()
        );
    }

    /**
     * Update user profile
     *
     * @bodyParam avatar file required The avatar of the user.
     * @bodyParam name string required The name of the user. Example: Nur Wachid
     * @bodyParam value string required The value of the user.
     * @param Request $request
     * @return ResponseFactory|\Illuminate\Http\Response
     */
    public function update_profile(Request $request)
    {
        // Validate request
        $validator = Validator::make($request->all(), [
            'avatar' => 'file',
            'name'   => 'string',
            'value'  => 'string',
        ]);

        // Return error
        if ($validator->fails()) {
            abort(400, 'Bad input');
        }

        // Get user
        $user = Auth::user();

        // Check if is demo
        if (is_demo($user->id)) {
            return Demo::response_204();
        }

        // Update data
        if ($request->hasFile('avatar')) {

            // Update avatar
            $avatar = store_avatar($request->file('avatar'), 'avatars');

            // Update data
            $user->update(['avatar' => $avatar]);
        } elseif ($request->hasFile('ktp')) {
            $ktp = store_system_image($request->file('ktp'), 'ktp');

            $user->update(['ktp' => $ktp]);
        } elseif ($request->hasFile('selfie')) {
            $ktp = store_system_image($request->file('selfie'), 'selfie');

            $user->update(['selfie' => $ktp]);
        } else {
            // Update text data
            $user->update(make_single_input($request));
        }

        return response('Saved!', 204);
    }

    /**
     * Update user settings relationship
     *
     * @bodyParam name string required The name of the setting. Example: storage
     * @bodyParam value string required The value of the setting. Example: 100
     *
     * @param Request $request
     * @return ResponseFactory|\Illuminate\Http\Response
     */
    public function update_user_settings(Request $request)
    {
        // Validate request
        $validator = Validator::make($request->all(), [
            'name'   => 'string',
            'value'  => 'string',
        ]);

        // Return error
        if ($validator->fails()) {
            abort(400, 'Bad input');
        }

        // Get user
        $user = Auth::user();

        // Check if is demo
        if (is_demo($user->id)) {
            return Demo::response_204();
        }

        // Update text data
        $user->settings->update(make_single_input($request));

        return response('Saved!', 204);
    }

    /**
     * Change user password
     *
     * @bodyParam password string required The password of the user. Example: Pa$$worD
     * @bodyParam password_confirmation string required The password_confirmation of the user. Example: Pa$$worD
     * @param Request $request
     * @return ResponseFactory|\Illuminate\Http\Response
     */
    public function change_password(Request $request)
    {
        // Validate request
        $request->validate([
            'password' => ['required', 'string', 'min:6', 'confirmed'],
        ]);

        // Get user
        $user = Auth::user();

        if (is_demo($user->id)) {
            return Demo::response_204();
        }

        // Change and store new password
        $user->password = Hash::make($request->input('password'));
        $user->save();

        return response('Changed!', 204);
    }

    /**
     * Get Token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function generate_token()
    {
        $settings = Setting::whereIn('name', ['storage_default', 'registration', 'api_key'])->pluck('value', 'name');
        $user = Auth::user();

        $apiResponse = Http::withHeaders([
            'api-key' => $settings['api_key'],
            'Content-Type' => 'application/json'
        ])->post(config('app.api') . 'v1/auth/generateLtcToken', [
            "email" => $user->email,
            "fullname" => $user->name,
            "nik" => $user->nik,
            "phone" => $user->phone,
            "birthdate" =>$user->birth_date,
            "birthplace" => $user->birth_place,
            "selfie" => base64_encode(file_get_contents($user->selfie)),
            "ktp" => base64_encode(file_get_contents($user->ktp))
        ])->object();

        $user->signatures()->create([
            'sign_token' => $apiResponse->data->token,
            'expired_at' => $apiResponse->data->expiredAt
        ]);


        return response()->json($apiResponse->data);
    }
}
