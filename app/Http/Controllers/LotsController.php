<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreLotRequest;
use App\Http\Resources\LotsResource;
use App\Models\Lot;
use Illuminate\Http\Request;

class LotsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return LotsResource::collection(Lot::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreLotRequest $request)
    {
        $request->validated();

        $lot = Lot::create([
            'description' => $request->description,
            'totalspots' => $request->totalspots
        ]);

        return new LotsResource($lot);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Lot $parkinglot)
    {
        return new LotsResource($parkinglot);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Lot $parkinglot)
    {
        $parkinglot->update($request->only(['description', 'totalspots']));

        return new LotsResource($parkinglot);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Lot $parkinglot)
    {
        $parkinglot->delete();

        return response()->json([
            'success' => true,
            'message' => 'Record deleted successfully'
        ]);
    }
}
