<?php

namespace App\Http\Middleware;

use Closure;

class CookieAuth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (!$request->bearerToken()) {
            if ($request->hasCookie('access_token')) {
                $access_token = $request->cookie('access_token');

                $request->headers->add(['Authorization' => 'Bearer ' . $access_token]);
            }
        }
        return $next($request);
    }
}
