<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FileManagerResource extends JsonResource
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
            "user_id" => $this->user_id,
            "unique_id" => $this->unique_id,
            "folder_id" => $this->folder_id,
            "thumbnail" => $this->thumbnail,
            "name" => $this->name,
            "basename" => $this->basename,
            "mimetype" => $this->mimetype,
            "filesize" => $this->filesize,
            "type" => $this->type,
            "metadata" => $this->metadata,
            'file_url' => $this->file_url,
            'file_pdf' => $this->file_url ? base64_encode(file_get_contents($this->file_url)): null,
            "user_scope" => $this->user_scope,
            "deleted_at" => $this->deleted_at,
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
        ];
    }
}
