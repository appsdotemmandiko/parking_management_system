<?php

namespace App\Http\Resources;

use App\Models\Lot;
use Illuminate\Http\Resources\Json\JsonResource;

class SpotsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $lot = Lot::find($this->lot_id);

        return [
            'id' => $this->id,
            'no' => $this->no,
            'lot_id' => $this->lot_id,
            'lotname' => $lot->description,
            'status' => $this->status
        ];
    }
}
