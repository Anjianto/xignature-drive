<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\LanguageTranslation
 *
 * @method static whereLang(string $string)
 * @property string $key
 * @property string $value
 * @property string $lang
 * @method static \Illuminate\Database\Eloquent\Builder|LanguageTranslation newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|LanguageTranslation newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|LanguageTranslation query()
 * @method static \Illuminate\Database\Eloquent\Builder|LanguageTranslation whereKey($value)
 * @method static \Illuminate\Database\Eloquent\Builder|LanguageTranslation whereValue($value)
 * @mixin \Eloquent
 */
class LanguageTranslation extends Model
{
    public $timestamps = false;

    public $primaryKey = null;

    public $incrementing = false;

    protected $fillable = [
        'value'
    ];
}
