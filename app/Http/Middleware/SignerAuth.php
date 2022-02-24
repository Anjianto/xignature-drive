<?php

namespace App\Http\Middleware;

use Closure;

class SignerAuth {
    public function handle($request, Closure $next)
    {
        if (!$request->bearerToken()) {
            if ($request->hasCookie('signer_access_token')) {
                $signer_access_token = $request->cookie('signer_access_token');

                $request->headers->add(['Authorization' => 'Bearer ' . $signer_access_token]);
            }
        }
        return $next($request);
    }
}