<?php

namespace App\Services;

use App\Signatures;
use App\FileManagerFile;

class SignatureService
{
    public function sign(string $sign_token, $file_id, $user_id)
    {
        $signature = new Signatures();
        $signature->user_id = $user_id;
        $signature->sign_token = $sign_token;
        $signature->file_manager_file = $file_id;
        $signature->save();
    }

    public function get_file_by_hash(string $hash, string $base_name)
    {
        $files = FileManagerFile::where('basename', $base_name)->get();

        for ($i=0; $i < count($files); $i++) {
            if ($hash == md5($files[$i]->id)) {
                return $files[$i];
            }
        }

        return null;
    }
}
