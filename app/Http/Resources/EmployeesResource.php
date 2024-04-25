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
        // $user = Employee::find($this->user_id);
        $user = Employee::find($this->id);
        
        return [
            
            'details' => [
                'Name' => $this->name,
                'Email' => $this->email,
                'PF No.' => $this->pfno,
                'Designation' => $this->designation,
                'Department' => $this->department,
                'Directorate' => $this->directorate,
                'Mobile Number' => $this->mobile,
                'Alternative NUmber' => $this->altno
           ]
        ];
    }
}
