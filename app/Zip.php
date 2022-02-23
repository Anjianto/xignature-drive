<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

/**
 * App\Zip
 *
 * @property string $id
 * @property int $user_id
 * @property string|null $shared_token
 * @property string $basename
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Zip newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Zip newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Zip query()
 * @method static \Illuminate\Database\Eloquent\Builder|Zip whereBasename($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Zip whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Zip whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Zip whereSharedToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Zip whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Zip whereUserId($value)
 * @mixin \Eloquent
 */
class Zip extends Model
{
    protected $guarded = ['id'];

    public $incrementing = false;

    protected $keyType = 'string';

    /**
     * Generate uuid
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->id = (string)Str::uuid();
        });
    }
}
