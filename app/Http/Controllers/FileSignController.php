<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Signatures;
use Auth;

class FileSignController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    public function add_sign(Request $request)
    {
        $user =  Auth::user();;
        $sign_token = $request->sign_token;

        $signature = new Signatures();
        $signature->user_id = $user->id;
        $signature->sign_token = $sign_token;
        $signature->save();

        return response()->json([
            'statusCode' => 200,
            'message' => 'Signature added successfully.',
            'data' => $signature
        ]);
    }
}
