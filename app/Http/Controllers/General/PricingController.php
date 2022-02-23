<?php

namespace App\Http\Controllers\General;

use App\Http\Controllers\Controller;
use App\Http\Resources\PricingCollection;
use App\Services\StripeService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

/**
 * @group Pricing
 *
 * Class PricingController
 * @package App\Http\Controllers\General
 */
class PricingController extends Controller
{
    /**
     * PlanController constructor.
     * @param StripeService $stripe
     */
    public function __construct(StripeService $stripe)
    {
        $this->stripe = $stripe;
    }

    /**
     * Get all active plans
     *
     * @return PricingCollection
     */
    public function index()
    {
        if (Cache::has('pricing')) {

            // Get pricing from cache
            $pricing = Cache::get('pricing');
        } else {

            // Store pricing to cache
            $pricing = Cache::rememberForever('pricing', function () {
                return $this->stripe->getActivePlans();
            });
        }

        // Format pricing to collection
        $collection = new PricingCollection($pricing);

        // Sort and return pricing
        return $collection->sortBy('product.metadata.capacity')
            ->values()
            ->all();
    }
}
