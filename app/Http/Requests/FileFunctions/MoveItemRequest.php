<?php

namespace App\Http\Requests\FileFunctions;

use Illuminate\Foundation\Http\FormRequest;

class MoveItemRequest extends FormRequest
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
            'to_unique_id'          => 'required|integer',
            'items[*].type'         => 'required|string',
            'items[*].unique_id'    => 'required|integer',
        ];
    }
}
