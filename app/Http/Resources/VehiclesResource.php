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
                'Registration Number' => $this->regno,
                'Make' => $this->make,
                'Model' => $this->model
            ],
            'owner' => [
                'name' => $emp->name,
                'Designation' => $emp->designation,
                'Department' => $emp->department,
                'Directorate' => $emp->directorate,
                'Mobile Number' => $emp->mobile,
                'Alternative NUmber' => $emp->altno
            ]
        ];
    }
}
