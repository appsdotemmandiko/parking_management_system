<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RolesController;
use App\Http\Controllers\SpotsController;
use App\Http\Controllers\VehiclesController;
use App\Http\Controllers\EmployeesController;
use App\Http\Controllers\LotsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => ['auth:sanctum']], function () 
{
    
    Route::resource('/vehicles', VehiclesController::class);
    Route::resource('/roles', RolesController::class);
    Route::resource('/employees', EmployeesController::class);
    Route::resource('/parkingspots', SpotsController::class);
    Route::resource('/parkinglots', LotsController::class);
});
