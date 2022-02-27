<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\PlanCollection;
use App\Http\Resources\PlanResource;
use App\Http\Resources\UsersCollection;
use App\Http\Tools\Demo;
use App\Services\StripeService;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Laravel\Cashier\Subscription;

/**
 * @group Plan
 *
 * Class PlanController
 * @package App\Http\Controllers\Admin
 */
class PlanController extends Controller
{
    private $stripe;
    /**
     * PlanController constructor.
     * @param StripeService $stripe
     */
    public function __construct(StripeService $stripe)
    {
        $this->stripe = $stripe;
    }

    /**
     * Get all plans
     *
     * @return PlanCollection
     */
    public function index()
    {
        // Store or Get plans to cache
        if (Cache::has('plans')) {
            $plans = Cache::get('plans');
        } else {
            $plans = Cache::rememberForever('plans', function () {
                return $this->stripe->getPlans();
            });
        }

        return new PlanCollection($plans);
    }

    /**
     * Get plan record
     *
     * @urlParam id integer required The ID of the plan. Example: 1
     * @param $id
     * @return PlanResource
     */
    public function show($id)
    {
        // Store or Get plan to cache
        if (Cache::has('plan-' . $id)) {
            $plan = Cache::get('plan-' . $id);
        } else {
            $plan = Cache::rememberForever('plan-' . $id, function () use ($id) {
                return $this->stripe->getPlan($id);
            });
        }

        return new PlanResource($plan);
    }

    /**
     * Create new plan
     *
     * @param Request $request
     * @return PlanResource
     */
    public function store(Request $request)
    {
        // Check if is demo
        if (env('APP_DEMO')) {
            if (Cache::has('plan-starter-pack')) {
                $plan = Cache::get('plan-starter-pack');
            } else {
                $plan = Cache::rememberForever('plan-starter-pack', function () {
                    return $this->stripe->getPlan('starter-pack');
                });
            }

            return new PlanResource($plan);
        }

        $plan = new PlanResource(
            $this->stripe->createPlan($request)
        );

        // Clear cached plans
        cache_forget_many(['plans', 'pricing']);

        return $plan;
    }

    /**
     * Update plan attribute
     *
     * @urlParam id integer required The ID of the plan. Example: 1
     *
     * @param Request $request
     * @param $id
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // Check if is demo
        if (env('APP_DEMO')) {
            return Demo::response_204();
        }

        // Update plan
        $this->stripe->updatePlan($request, $id);

        // Clear cached plans
        cache_forget_many(['plans', 'pricing', 'plan-' . $id]);

        return response('Saved!', 204);
    }

    /**
     * Delete plan
     *
     * @urlParam id integer required The ID of the plan. Example: 1
     * @param $id
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function delete($id)
    {
        // Check if is demo
        if (env('APP_DEMO')) {
            return Demo::response_204();
        }

        // Delete plan
        $this->stripe->deletePlan($id);

        // Clear cached plans
        cache_forget_many(['plans', 'pricing']);

        return response('Done!', 204);
    }

    /**
     * Get subscriptions
     *
     * @param $id
     * @return mixed
     */
    public function subscribers($id)
    {
        $subscribers = Subscription::where('stripe_plan', $id)->pluck('user_id');

        return new UsersCollection(
            User::sortable()->findMany($subscribers)
        );
    }
}
