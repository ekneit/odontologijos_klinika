<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\RegisterController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

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

//Route::middleware('auth:sanctum')->get('/user/', function (Request $request) {
//    return $request->user();
//});
//Route::middleware('auth:sanctum')->get('/user/autenticated', function () {
//    return true;
//});
//Route::apiResource('/user', UserController::class);
//Route::post('/user/login', [userController::class, 'login']);
//Route::post('/user/logout', [userController::class, 'logout']);
//Route::apiResource('/user', UserController::class);
// GOOD
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);
