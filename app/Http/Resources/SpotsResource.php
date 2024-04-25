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
            'Spot Number' => $this->no,
            'Location' => $lot->description,
            'Status' => $this->status
        ];
    }
}
