<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreEmpRequest extends FormRequest
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
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => ['required', 'string'],
            'email' => ['required', 'email', 'unique:employees'],
            'pfno' => ['required', 'string', 'unique:employees'],
            'designation' => ['required'],
            'department' => ['required'],
            'directorate' => ['required'],
            'mobile' => ['required', 'numeric'],
            'altno' => ['required']
        ];
    }
}
