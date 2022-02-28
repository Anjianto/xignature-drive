<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ListUserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'email' => $this->email,
            'name' => $this->name,
            'avatar' => $this->avatar,
            'phone' => $this->phone,
            'nik' => $this->nik,
            'ktp' => $this->ktp,
            'birth_date' => $this->birth_date->format('Y-m-d'),
            'selfie'=> $this->selfie,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
