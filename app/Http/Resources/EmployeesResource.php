<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Employee;

class EmployeesResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $user = Employee::find($this->id);
        
        return [
            
                'id' => $this->id,
                'name' => $this->name,
                'email' => $this->email,
                'pfno' => $this->pfno,
                'designation' => $this->designation,
                'department' => $this->department,
                'directorate' => $this->directorate,
                'mobile' => $this->mobile,
                'altno' => $this->altno
        ];
    }
}
