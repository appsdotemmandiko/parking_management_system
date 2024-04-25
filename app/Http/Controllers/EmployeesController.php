<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreEmpRequest;
use App\Models\Employee;
use Illuminate\Http\Request;
use App\Http\Resources\EmployeesResource;

class EmployeesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return EmployeesResource::collection(Employee::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreEmpRequest $request)
    {
        $request->validated();

        $emp = Employee::create([
            'name' => $request->name,
            'email' => $request->email,
            'pfno' => $request->pfno,
            'designation' => $request->designation,
            'department' => $request->department,
            'directorate' => $request->directorate,
            'mobile' => $request->mobile,
            'altno' => $request->altno
        ]);

        return new EmployeesResource($emp);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Employee $employee)
    {
        return new EmployeesResource($employee);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Employee $employee)
    {
        $employee->update($request->only([
            'name', 'email', 'pfno', 'designation', 'department', 'directorate', 'mobile', 'altno'
        ]));

        return new EmployeesResource($employee);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
