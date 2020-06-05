<?php

namespace App\Http\Controllers\User;

use App\FileManagerFile;
use App\FileManagerFolder;
use App\Http\Resources\InvoiceCollection;
use App\Http\Resources\StorageDetailResource;
use App\Http\Resources\UserResource;
use App\Http\Resources\UserStorageResource;
use App\Http\Tools\Demo;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use ByteUnits\Metric;
use App\User;

class AccountController extends Controller
{
    /**
     * Get all user data to frontend
     *
     * @return array
     */
    public function user()
    {
        // Get User
        $user = Auth::user();

        // Get folder tree
        $tree = FileManagerFolder::with(['folders.shared', 'shared:token,id,item_id,permission,protected'])
            ->where('parent_id', 0)
            ->where('user_id', $user->id)
            ->get();

        return [
            'user'       => $user->only(['name', 'email', 'avatar', 'role']),
            'favourites' => $user->favourite_folders->makeHidden(['pivot']),
            'tree'       => $tree,
            'storage'    => [
                'used'       => Metric::bytes($user->used_capacity)->format(),
                'capacity'   => format_gigabytes($user->settings->storage_capacity),
                'percentage' => get_storage_fill_percentage($user->used_capacity, $user->settings->storage_capacity),
            ],
        ];
    }

    /**
     * Get me
     *
     * @return UserResource
     */
    public function me()
    {
        return new UserResource(
            Auth::user()
        );
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

    public function invoices() {
        return new InvoiceCollection(
            Auth::user()->invoices
        );
    }

    /**
     * Update user profile
     *
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
        if ($validator->fails()) abort(400, 'Bad input');

        // Get user
        $user = Auth::user();

        // Check if is demo
        if (is_demo($user->id)) {
            return Demo::response_204();
        }

        // Check role
        if ($request->has('role')) abort(403);

        // Update data
        if ($request->hasFile('avatar')) {

            // Update avatar
            $avatar = store_avatar($request->file('avatar'), 'avatars');

            // Update data
            $user->update(['avatar' => $avatar]);

        } else {

            // Update text data
            $user->update(make_single_input($request));
        }

        return response('Saved!', 204);
    }

    /**
     * Update user settings relationship
     *
     * @param Request $request
     * @return ResponseFactory|\Illuminate\Http\Response
     */
    public function update_user_settings(Request $request)
    {
        // TODO: validation
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
}
