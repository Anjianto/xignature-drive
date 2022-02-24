<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Signatures;
use Auth;
use App\FileManagerFile;

/**
 * @group File Sign
 *
 * Class FileSignController
 * @package App\Http\Controllers
 */
class FileSignController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function add_sign(Request $request)
    {
        $user =  Auth::user();

        $sign_token = $request->sign_token;
        $file_manager_file = $request->file_id;

        $signature = new Signatures();
        $signature->user_id = $user->id;
        $signature->sign_token = $sign_token;
        $signature->file_manager_file = $file_manager_file;
        $signature->save();

        return response()->json([
            'statusCode' => 200,
            'message' => 'Signature added successfully.',
            'data' => $signature
        ]);
    }

    /**
     * @param string $fileId
     * @param $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function sign_document(string $fileId, Request $request)
    {
        $user = Auth::user()->id;
        $token = $request->sign_token;
        $document_id = $request->document_id;
        $document = FileManagerFile::where('id', $fileId)->first();
        if (!$document) {
            return response()->json([
                'statusCode' => 404,
                'message' => 'Document not found.'
            ]);
        }
        $signature = $document->signatures()->where('sign_token', $token)->where('user_id', $user)->first();

        if (!$signature) {
            return response()->json([
                'statusCode' => 404,
                'message' => 'Signature not found.'
            ]);
        }


        if ($signature->document_id != null) {
            return response()->json([
                'statusCode' => 200,
                'message' => 'Document Already Signed.',
                'data' => $signature
            ]);
        }

        $signature->document_id = $document_id;
        $signature->save();

        //TODO: Send email to owner of document

        return response()->json([
            'statusCode' => 200,
            'message' => 'Document Signed Successfully.',
            'data' => $signature
        ]);
    }

    public function find_document(string $fileId)
    {
        $user = Auth::user()->id;
        $document = FileManagerFile::where('id', $fileId)->first();
        if (!$document) {
            return response()->json([
                'statusCode' => 404,
                'message' => 'Document not found.'
            ]);
        }
        $signature = $document->signatures()->where('user_id', $user)->first();

        if (!$signature) {
            return response()->json([
                'statusCode' => 404,
                'message' => 'Signature not found.'
            ]);
        }

        return response()->json([
            'statusCode' => 200,
            'message' => 'Document Found.',
            'data' => $signature
        ]);
    }
}
