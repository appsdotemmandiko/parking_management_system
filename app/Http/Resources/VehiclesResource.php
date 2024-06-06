<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Employee;

class VehiclesResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $emp = Employee::find($this->emp_id);

        return [
            
            'details' => [
                'id' => $this->id,
                'emp_id' => $this->emp_id,
                'regno' => $this->regno,
                'make' => $this->make,
                'model' => $this->model
            ],
            'owner' => [
                'name' => $emp->name,
                'designation' => $emp->designation,
                'department' => $emp->department,
                'directorate' => $emp->directorate,
                'mobile' => $emp->mobile,
                'altno' => $emp->altno
            ]
        ];
    }
}
