<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * @bodyParam title string  required The title of the document. Example: File sample document
 * @bodyParam reason string  required The reason of the document. Example: sign to projects
 * @bodyParam sign_page string  required The sign_page of the document. Example: 1
 * @bodyParam sign_pos string  object The sign_pos of the document.
 * @bodyParam share_document_to_customer string  required The share_document_to_customer of the document. Example: true
 * @bodyParam otp string  required The otp of the document. Example: 12345678
 *
 * Class SignRequest
 * @package App\Http\Requests
 */
class SignRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'fileId' => 'required|string',
            'title' => 'required|string',
            'reason' => 'required|string',
            // 'sign_page' => 'required|integer',
            // 'sign_pos' => 'required|array',
            'share_document_to_customer' => 'required|boolean',
            'otp' => 'required|string'
        ];
    }
}
