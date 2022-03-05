<?php

namespace App\Http\Controllers;

use App\Http\Resources\FileManagerResource;
use App\Http\Tools\Guardian;
use App\User;
use App\Zip;
use Carbon\Carbon;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\FileManagerFile;
use Illuminate\Support\Facades\Storage;

/**
 * @group File Access
 *
 * Class FileAccessController
 * @package App\Http\Controllers
 */
class FileAccessController extends Controller
{
    /**
     * Get avatar
     *
     * @param $basename
     * @return mixed
     */
    public function get_avatar($basename)
    {
        // Get file path
        $path = '/avatars/' . $basename;

        // Check if file exist
        if (!Storage::exists($path)) {
            abort(404);
        }

        // Return avatar
        return Storage::download($path, $basename);
    }

    /**
     * Get selfie
     *
     * @param $basename
     * @return mixed
     */
    public function get_selfie($basename)
    {
        // Get file path
        $path = '/selfie/' . $basename;

        // Check if file exist
        if (!Storage::exists($path)) {
            abort(404);
        }

        // Return selfie
        return Storage::download($path, $basename);
    }

    /**
     * Get ktp
     *
     * @param $basename
     * @return mixed
     */
    public function get_ktp($basename)
    {
        // Get file path
        $path = '/ktp/' . $basename;

        // Check if file exist
        if (!Storage::exists($path)) {
            abort(404);
        }

        // Return ktp
        return Storage::download($path, $basename);
    }

    /**
     * Get system image
     *
     * @param $basename
     * @return mixed
     */
    public function get_system_image($basename)
    {
        // Get file path
        $path = '/system/' . $basename;

        // Check if file exist
        if (!Storage::exists($path)) {
            abort(404);
        }

        // Return avatar
        return Storage::download($path, $basename);
    }

    public function getFile($id)
    {
        $file = FileManagerFile::findOrFail($id);
        return new FileManagerResource($file);
    }

    /**
     * Get file
     *
     * @param Request $request
     * @param $filename
     * @return mixed
     * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
     */
    public function get_file(Request $request, $filename)
    {
        // Get user id
        $user_id = Auth::id();

        // Get file record
        $file = FileManagerFile::withTrashed()
            ->whereRaw(
                "file_manager_files.id IN (SELECT file_manager_files.id FROM signatures WHERE signatures.user_id = $user_id AND signatures.file_manager_file = file_manager_files.id )"
            )
            ->orWhere('user_id', $user_id)	
            ->where('basename', $filename)
            ->firstOrFail();
        

        // Check user permission
        // if (!$request->user()->tokenCan('master')) {

        //     // Get shared token
        //     $shared = get_shared($request->cookie('shared_token'));

        //     // Check access to file
        //     $this->check_file_access($shared, $file);
        // }

        // Store user download size
        $request->user()->record_download((int)$file->getRawOriginal('filesize'));

//        return $file->file_url;

        return $this->download_file($file);
    }

    /**
     * Get generated zip for user
     *
     * @param $id
     * @return \Symfony\Component\HttpFoundation\StreamedResponse
     */
    public function get_zip($id)
    {
        $zip = Zip::where('id', $id)
            ->where('user_id', Auth::id())
            ->first();

        $zip_path = 'zip/' . $zip->basename;

        $header = [
            "Content-Type"        => 'application/zip',
            "Content-Length"      => Storage::disk('local')->size($zip_path),
            "Accept-Ranges"       => "bytes",
            "Content-Range"       => "bytes 0-600/" . Storage::disk('local')->size($zip_path),
            "Content-Disposition" => "attachment; filename=" . $zip->basename,
        ];

        return Storage::disk('local')->download($zip_path, $zip->basename, $header);
    }

    /**
     * Get generated zip for guest
     *
     * @param $id
     * @param $token
     * @return \Symfony\Component\HttpFoundation\StreamedResponse
     */
    public function get_zip_public($id, $token)
    {
        $zip = Zip::where('id', $id)
            ->where('shared_token', $token)
            ->first();

        $zip_path = 'zip/' . $zip->basename;

        $header = [
            "Content-Type"        => 'application/zip',
            "Content-Length"      => Storage::disk('local')->size($zip_path),
            "Accept-Ranges"       => "bytes",
            "Content-Range"       => "bytes 0-600/" . Storage::disk('local')->size($zip_path),
            "Content-Disposition" => "attachment; filename=" . $zip->basename,
        ];

        return Storage::disk('local')->download($zip_path, $zip->basename, $header);
    }

    /**
     * Get file public
     *
     * @param $filename
     * @param $token
     * @return mixed
     * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
     */
    public function get_file_public($filename, $token)
    {
        // Get sharing record
        $shared = get_shared($token);

        // Abort if shared is protected
        if ((int)$shared->protected) {
            abort(403, "Sorry, you don't have permission");
        }

        // Get file record
        $file = FileManagerFile::where('user_id', $shared->user_id)
            ->where('basename', $filename)
            ->firstOrFail();

        // Check file access
        $this->check_file_access($shared, $file);

        // Store user download size
        User::find($shared->user_id)->record_download((int)$file->getRawOriginal('filesize'));

        return $this->download_file($file);
    }

    /**
     * Get image thumbnail
     *
     * @param Request $request
     * @param $filename
     * @return mixed
     * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
     */
    public function get_thumbnail(Request $request, $filename)
    {
        // Get file record
        $file = FileManagerFile::withTrashed()
            ->where('user_id', $request->user()->id)
            ->where('thumbnail', $filename)
            ->firstOrFail();

        // Check user permission
        if (!$request->user()->tokenCan('master')) {
            $this->check_file_access($request, $file);
        }

        return $this->thumbnail_file($file);
    }

    /**
     * Get public image thumbnail
     *
     * @param $filename
     * @param $token
     * @return mixed
     * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
     */
    public function get_thumbnail_public($filename, $token)
    {
        // Get sharing record
        $shared = get_shared($token);

        // Abort if thumbnail is protected
        if ((int)$shared->protected) {
            abort(403, "Sorry, you don't have permission");
        }

        // Get file record
        $file = FileManagerFile::where('user_id', $shared->user_id)
            ->where('thumbnail', $filename)
            ->firstOrFail();

        // Check file access
        $this->check_file_access($shared, $file);

        return $this->thumbnail_file($file);
    }

    /**
     * Check user file access
     *
     * @param $shared
     * @param $file
     */
    protected function check_file_access($shared, $file): void
    {
        // Check by parent folder permission
        if ($shared->type === 'folder') {
            Guardian::check_item_access($file->folder_id, $shared);
        }

        // Check by single file permission
        if ($shared->type === 'file') {
            if ($shared->item_id !== $file->unique_id) {
                abort(403);
            }
        }
    }

    /**
     * Call and download file
     *
     * @param $file
     * @return mixed
     */
    private function download_file($file)
    {
        $file_pretty_name = get_pretty_name($file->basename, $file->name, $file->mimetype);

        // Get file path
        $path = '/file-manager/' . $file->basename;

        // Check if file exist
        if (!Storage::exists($path)) {
            abort(404);
        }

        $headers = [
            "Accept-Ranges"       => "bytes",
            "Content-Type"        => Storage::mimeType($path),
            "Content-Length"      => Storage::size($path),
            "Content-Range"       => "bytes 0-600/" . Storage::size($path),
            "Content-Disposition" => "attachment; filename=" . $file_pretty_name,
        ];

        if (config('filesystems.default') == 's3') {
            return Storage::download('file-manager/' . $file->basename, $file_pretty_name, $headers);
//            return Storage::temporaryUrl('file-manager/' . $file->basename, Carbon::now()->addHour());
//            return response()->download(Storage::temporaryUrl('file-manager/' . $file->basename, Carbon::now()->addHour()));
        }

        return response()->download(config('filesystems.disks.local.root') . '/file-manager/' . $file->basename, $file_pretty_name, $headers);
    }

    /**
     * @param $file
     * @return mixed
     */
    private function thumbnail_file($file)
    {
        // Get file path
        $path = '/file-manager/' . $file->getRawOriginal('thumbnail');

        // Check if file exist
        if (!Storage::exists($path)) {
            abort(404);
        }

        // Return image thumbnail
        return Storage::download($path, $file->getRawOriginal('thumbnail'));
    }
}
