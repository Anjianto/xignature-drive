<?php

namespace App\Http\Controllers;

use App\Http\Requests\SignRequest;
use App\Http\Resources\FileManagerResource;
use App\Setting;
use Illuminate\Http\Request;
use App\Signatures;
use Auth;
use App\FileManagerFile;
use App\Notifications\SignDocuInvitation;
use Illuminate\Support\Facades\Http;
use App\Services\SignatureService;
use App\User;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Notification;
use Storage;

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
     * @urlParam id integer required The ID of the document.
     * @param SignRequest $request
     * @param $id
     * @return FileManagerResource|\Illuminate\Http\JsonResponse
     */
    public function sign(SignRequest $request)
    {
        $fileId = decrypt($request->input('fileId'));
        $document = FileManagerFile::findOrFail($fileId);
        $token = $request->user()->signatures->last();
        if (!isset($token)) {
            return response()->json([
                'status' => 'empty',
                'message' => 'Please generate token'
            ], 400);
        }
        if ($token->expired())
        {
            return response()->json(['message' => 'token was expired, Please generate again'], 400);
        }

        $settings = Setting::whereIn('name', ['storage_default', 'registration', 'api_key'])->pluck('value', 'name');
        $doc = Storage::get('/file-manager' . '/' . $document->basename);
        $apiResponse = Http::withHeaders([
            'api-key' => $settings['api_key'],
            // 'Content-Type' => 'application/json',
            'one-time-token' => $token->sign_token,
            'otp' => $request->input('otp')
        ])->post(config('app.api') . 'v1/document/sign', [
            "title" => $request->input('title'),
            "reason" => $request->input('reason'),
            "signPage" => 1,
            "signPos" => [
                "x" => 0,
                "y" => 0,
            ],
            "shareDocumentToCustomer" => true,
            'document' => base64_encode($doc),
        ]);


        $apiData = $apiResponse->object();

        if (isset($apiData)) {
            if($apiData->statusCode == 201) {
                $document->update(['metadata' => $apiData->data]);
                $token->update(['document_id' => $document->id]);
                return new FileManagerResource($document);
            }
            if($apiData->statusCode == 500) {
                return response()->json(['message' => $apiData->error], 400);
            }
            return response()->json([
                'status' => 'unknown',
                'message' => 'Something went wrong'
            ], 400);
            
        }
        return response()->json($apiResponse->body(), $apiResponse->status());
    }

    public function download_document(string $document_id) {
        $settings = Setting::whereIn('name', ['storage_default', 'registration', 'api_key'])->pluck('value', 'name');
        // download the document        
        $apiResponse = Http::withHeaders([
            'api-key' => $settings['api_key'],
            'Accept' => 'application/pdf',
        ]) -> get(config('app.api') . 'v1/document/download/' . $document_id);

        return response($apiResponse->body(), $apiResponse->status())->header('Content-Type', 'application/pdf');
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function add_sign(Request $request, SignatureService $signService)
    {
        $settings = Setting::whereIn('name', ['storage_default', 'registration', 'api_key'])->pluck('value', 'name');
        $user = $request->user();


        Log::debug("ktp is loading");
        
        $ktp_file = Storage::get('/' . $user->ktp);
        // dd("ktp is loading");
        $selfie_file = Storage::get('/' . $user->selfie);
        $ktp = base64_encode($ktp_file);
        $selfie = base64_encode($selfie_file);
        $apiResponse = Http::withHeaders([
            'api-key' => $settings['api_key'],
            'Content-Type' => 'application/json',
            'Accept' => 'application/json',
        ])->post(config('app.api') . 'v1/auth/generateLtcToken', [
            "email" => $user->email,
            "fullname" => $user->name,
            "nik" => $user->nik,
            "phone" => $user->phone,
            "birthdate" => $user->birth_date,
            "birthplace" => $user->birth_place,
            "selfie" => $selfie,
            "ktp" => $ktp
        ]);
        
        $apiData = $apiResponse->object();
        // dd($apiData);
        if (isset($apiData) && $apiData->statusCode == 200) {
            $signService->sign($apiData->data->token, null, $user->id);
            // dd($apiData);
            return response()->json([
                'statusCode' => 200,
                'message' => 'Signature update successfully.',
            ]);
        }

        return response()->json([
            'statusCode' => 400,
            'message' => 'Failed to add signature.',
            'data' => $apiData
        ], 400);
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
        $signature->file_manager_file = $fileId;
        $signature->save();

        //TODO => Send email to owner of document

        return response()->json([
            'statusCode' => 200,
            'message' => 'Document Signed Successfully.',
            'data' => $signature
        ]);
    }



    public function find_document(Request $request)
    {
        $user = Auth::user()->id;
        $fileId = decrypt($request->file_id);
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
                'statusCode' => 200,
                'data' => $document,
                'message' => 'Found the document.',
            ]);
        }

        return response()->json([
            'statusCode' => 200,
            'message' => 'Document Found.',
            'data' => [
                'document' => $document,
                'signature' => $signature
            ]
        ]);
    }

    function allow_signature(string $fileId, Request $request) {
        $email = $request->email;
        $user = User::whereEmail($email)->first();
        $document = FileManagerFile::where('id', $fileId)->first();

        if (!$user) {
            // send sign document email
            // hash filed id
            $file_hash = md5($fileId);
            $filename = $document->basename;
            Notification::route('mail', $email)->notify(new SignDocuInvitation($file_hash, $filename));
            
            return response()->json([
                'statusCode' => 201,
                'message' => 'Mail send to user.'
            ]);
            
        }

        if (!$document) {
            return response()->json([
                'statusCode' => 404,
                'message' => 'Document not found.'
            ]);
        }
        $signature = new Signatures();
        try {
            //code...
            $signature->user_id = $user->id;
            $signature->file_manager_file = $fileId;
            $signature->save();
            return response()->json([
                'statusCode' => 200,
                'message' => 'Document Signed Successfully.',
                'data' => $signature
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'statusCode' => 500,
                'message' => 'Internal Server Error.'
            ]);
        }
    }

    public function get_file_by_hash(string $hash, Request $request) {
        $base_name = $request->filename;
        $files = FileManagerFile::where('basename', $base_name)->get();

        for ($i=0; $i < count($files); $i++) { 
            if($hash == md5($files[$i]->id)) {
                return response()->json([
                    'statusCode' => 200,
                    'message' => 'File founded.',
                    'file' => $files[$i]
                ]);
            }
        }

        if (!count($files)) {
            return response()->json([
                'statusCode' => 404,
                'message' => 'File not found.'
            ]);
        }
    }
}
