<?php
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*
|--------------------------------------------------------------------------
| Public API Routes
|--------------------------------------------------------------------------
*/

// Public routes
Route::group(['middleware' => ['api']], function () {

    // User reset password
    Route::post('/password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
    Route::post('/password/reset', 'Auth\ResetPasswordController@reset');

    // User authentication
    Route::post('/user/check', 'Auth\AuthController@check_account');
    Route::post('/user/register', 'Auth\AuthController@register');
    Route::post('/user/login', 'Auth\AuthController@login');

    // Sharing
    Route::get('/folders/{unique_id}/public/{token}', 'Sharing\FileSharingController@get_public_folders');
    Route::post('/shared/authenticate/{token}', 'Sharing\FileSharingController@authenticate');
    Route::get('/files/{token}/public', 'Sharing\FileSharingController@file_public');
    Route::get('/shared/{token}', 'FileFunctions\ShareController@show');
});

// User master Routes
Route::group(['middleware' => ['auth:api', 'auth.cookie', 'scope:master']], function () {

    // User
    Route::post('/user/password', 'User\AccountController@change_password');
    Route::patch('/user/profile', 'User\AccountController@update_profile');
    Route::get('/user', 'User\AccountController@user');

    // Browse
    Route::get('/file-detail/{unique_id}', 'FileBrowser\BrowseController@file_detail');
    Route::get('/folders/{unique_id}', 'FileBrowser\BrowseController@folder');
    Route::get('/folder-tree', 'FileBrowser\BrowseController@folder_tree');
    Route::get('/shared-all', 'FileBrowser\BrowseController@shared');
    Route::get('/search', 'FileBrowser\BrowseController@search');
    Route::get('/trash', 'FileBrowser\BrowseController@trash');

    // Edit functions
    Route::patch('/move-item/{unique_id}', 'FileFunctions\EditItemsController@move_item');

    // Trash
    Route::patch('/restore-item/{unique_id}', 'FileFunctions\TrashController@restore');
    Route::delete('/empty-trash', 'FileFunctions\TrashController@clear');

    // Favourites
    Route::delete('/folders/favourites/{unique_id}', 'FileFunctions\FavouriteController@destroy');
    Route::post('/folders/favourites', 'FileFunctions\FavouriteController@store');

    // Share
    Route::delete('/share/{token}', 'FileFunctions\ShareController@destroy');
    Route::patch('/share/{token}', 'FileFunctions\ShareController@update');
    Route::post('/share', 'FileFunctions\ShareController@store');

    // Auth
    Route::get('/logout', 'Auth\AuthController@logout');
});

// Protected sharing routes for authenticated user
Route::group(['middleware' => ['auth:api', 'auth.cookie', 'scope:visitor,editor']], function () {

    // Browse folders & files
    Route::get('/folders/{unique_id}/private', 'Sharing\FileSharingController@get_private_folders');
    Route::get('/files/private', 'Sharing\FileSharingController@file_private');
});

// User master,editor routes
Route::group(['middleware' => ['auth:api', 'auth.cookie', 'scope:master,editor']], function () {

    // Edit items
    Route::delete('/remove-item/{unique_id}', 'FileFunctions\EditItemsController@delete_item');
    Route::patch('/rename-item/{unique_id}', 'FileFunctions\EditItemsController@rename_item');
    Route::post('/create-folder', 'FileFunctions\EditItemsController@create_folder');
    Route::post('/upload-file', 'FileFunctions\EditItemsController@upload_item');
});
