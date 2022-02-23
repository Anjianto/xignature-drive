<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Signatures extends Model
{
    protected $table = 'signatures';
    protected $fillable = ['user_id', 'sign_token', 'file_manager_file', 'document_id'];
    public $timestamps = true;

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function file_manager_file()
    {
        return $this->belongsTo('App\FileManagerFile');
    }
}
