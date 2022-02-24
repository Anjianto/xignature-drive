<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Signatures
 *
 * @property-read \App\FileManagerFile $file_manager_file
 * @property-read \App\User $user
 * @method static \Illuminate\Database\Eloquent\Builder|Signatures newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Signatures newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Signatures query()
 * @mixin \Eloquent
 */
class Signatures extends Model
{
    /**
     * @var string
     */
    protected $table = 'signatures';
    /**
     * @var string[]
     */
    protected $fillable = ['user_id', 'sign_token', 'file_manager_file', 'document_id'];
    /**
     * @var bool
     */
    public $timestamps = true;

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function file_manager_file()
    {
        return $this->belongsTo('App\FileManagerFile');
    }
}
