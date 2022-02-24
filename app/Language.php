<?php

namespace App;

use App\Services\LanguageService;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;
use Kyslik\ColumnSortable\Sortable;

/**
 * App\Language
 *
 * @method static whereLocale(string $param)
 * @property string $id
 * @property string $name
 * @property string $locale
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\LanguageTranslation[] $languageTranslations
 * @property-read int|null $language_translations_count
 * @method static \Illuminate\Database\Eloquent\Builder|Language newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Language newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Language query()
 * @method static \Illuminate\Database\Eloquent\Builder|Language sortable($defaultParameters = null)
 * @method static \Illuminate\Database\Eloquent\Builder|Language whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Language whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Language whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Language whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Language extends Model
{
    use Sortable;

    /**
     * @var string[]
     */
    public $sortable = [
        'created_at',
    ];

    /**
     * @var string[]
     */
    protected $guarded = [
        'id'
    ];

    /**
     * @var string
     */
    protected $keyType = 'string';

    /**
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     * @var bool
     */
    public $incrementing = false;

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function languageTranslations()
    {
        return $this->hasMany(LanguageTranslation::class, 'lang', 'locale');
    }

    /**
     *
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($language) {
            $language->id = Str::uuid();

            /*resolve(LanguageService::class)
                ->create_default_language_translations(
                    get_setting('license') ?? 'extended', $language->locale
                );*/
        });

        static::updating(function ($language) {
            cache()->forget("language-translations-$language->locale");
        });

        static::deleting(function ($language) {
            DB::table('language_translations')
                ->whereLang($language->locale)
                ->delete();

            cache()->forget("language-translations-$language->locale");
        });
    }
}
