<?php

namespace App\Http\Controllers;

use App\Http\Requests\SignRequest;
use App\Http\Resources\FileManagerResource;
use App\Setting;
use Illuminate\Http\Request;
use App\Signatures;
use Auth;
use App\FileManagerFile;
use Illuminate\Support\Facades\Http;

/**
 * @group File Sign
 *
 * Class FileSignController
 * @package App\Http\Controllers
 */
class FileSignController extends Controller
{
    /**
     * Sign Document
     *
     * @param SignRequest $request
     * @param $id
     * @return FileManagerResource|\Illuminate\Http\JsonResponse
     */
    public function sign(SignRequest $request, $id)
    {
        $document = FileManagerFile::findOrFail($id);
        $token = $request->user()->signatures->last();
        if (!$token) {
            if ($token->expired())
            {
                return response()->json(['message' => 'token was expired, Please generate again'], 400);
            }
            return response()->json(['message' => 'Please generate token'], 400);
        }


        $settings = Setting::whereIn('name', ['storage_default', 'registration', 'api_key'])->pluck('value', 'name');
        $apiResponse = Http::withHeaders([
            'api-key' => $settings['api_key'],
            'Content-Type' => 'application/json',
            'one-time-token' => $token->sign_token,
            'otp' => $request->input('otp')
        ])->post(config('app.api') . 'v1/document/sign', [
            "title" => $request->input('title'),
            "reason" => $request->input('reason'),
            "signPage" => $request->input('sign_page'),
            "signPos" => $request->input('sign_pos'),
            "shareDocumentToCustomer" => $request->input('share_document_to_customer'),
            'document' => base64_encode(file_get_contents($document->file_url))
        ])->object();


        if ($apiResponse->statusCode == 201) {
            $document->update(['metadata' => $apiResponse->data]);
            $token->update(['document_id' => $document->id]);
            return new FileManagerResource($document);
        }
        return response()->json(['message' => $apiResponse->message], 400);

    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function add_sign(Request $request)
    {
        $user = Auth::user();

        $sign_token = $request->sign_token;
        $file_manager_file = $request->file_id;

        $signature = new Signatures();
        $signature->user_id = $user->id;
        $signature->sign_token = $sign_token;
//        $signature->file_manager_file = $file_manager_file;
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
    public function sign_document(string $fileId, $request)
    {
        $user = Auth::user()->id;
        $token = $request->sign_token;
        $document_id = $request->document_id;
        $document = FileManagerFile::where('uid', $fileId)->first();
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

        //TODO => Send email to owner of document

        return response()->json([
            'statusCode' => 200,
            'message' => 'Document Signed Successfully.',
            'data' => $signature
        ]);
    }
}
