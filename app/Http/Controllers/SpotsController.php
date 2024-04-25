<?php

namespace App\Http\Controllers;

use App\Models\Spot;
use Illuminate\Http\Request;
use App\Http\Resources\SpotsResource;
use App\Http\Requests\StoreSpotRequest;

class SpotsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return SpotsResource::collection(Spot::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreSpotRequest $request)
    {
        $request->validated();

        $spot = Spot::create([
            'lot_id' => $request->lot_id,
            'no' => $request->no,
            'status' => $request->status
        ]);

        return new SpotsResource($spot);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Spot $parkingspot)
    {
        return new SpotsResource($parkingspot);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Spot $parkingspot)
    {
        $parkingspot->update($request->only(['no', 'status']));

        return new SpotsResource($parkingspot);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Spot $parkingspot)
    {
        $parkingspot->delete();

        return response()->json([
            'success' => true,
            'message' => 'Record deleted successfully'
        ]);
    }
}
