<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\LotsController;
use App\Http\Controllers\RolesController;
use App\Http\Controllers\SpotsController;
use App\Http\Controllers\VehiclesController;
use App\Http\Controllers\EmployeesController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Public routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

//Change to Protected 

Route::resource('/vehicles', VehiclesController::class);
Route::resource('/roles', RolesController::class);
Route::resource('/employees', EmployeesController::class);
Route::resource('/parkingspots', SpotsController::class);
Route::post('/logout', [AuthController::class, 'logout']);

//Protected routes


// Route::group(['middleware' => ['auth:sanctum']], function () 
// {
    
//     Route::resource('/vehicles', VehiclesController::class);
//     Route::resource('/roles', RolesController::class);
//     Route::resource('/employees', EmployeesController::class);
//     Route::resource('/parkingspots', SpotsController::class);
//     Route::post('/logout', [AuthController::class, 'logout']);
// });