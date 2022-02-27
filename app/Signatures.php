<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Mvdnbrk\EloquentExpirable\Expirable;

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
    use Expirable;
    /**
     * @var string
     */
    protected $table = 'signatures';
    /**
     * @var string[]
     */
    protected $fillable = ['user_id', 'sign_token', 'file_manager_file', 'document_id', 'expired_at'];
    /**
     * @var bool
     */
    public $timestamps = true;

    const EXPIRES_AT = 'expired_at';

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
