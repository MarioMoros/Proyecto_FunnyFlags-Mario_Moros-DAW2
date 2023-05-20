<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;
use App\Http\Controllers\CountryController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('getAllCountryData', [CountryController::class, 'getAllCountryData']);
Route::get('getQuestion/{i}', [CountryController::class, 'getQuestion']);
Route::get('pedirBanderas', [CountryController::class, 'pedirBanderas']);
Route::get('pedirPaises', [CountryController::class, 'pedirPaises']);

Route::post('login', [ApiController::class, 'login']);
Route::post('register', [ApiController::class, 'register']);
Route::get('infoUser/{i}', [ApiController::class, 'getUserData']);
Route::get('logout/{token}', [ApiController::class, 'logout']);

