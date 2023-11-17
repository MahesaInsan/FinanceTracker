<?php

use App\Http\Controllers\AppController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:  POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Origin, Authorization');

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

Route::post("/register", [App\Http\Controllers\AppController::class, 'register']);
Route::post("/login", [App\Http\Controllers\AppController::class, "login"]);
Route::get('/profile/{id}', [App\Http\Controllers\UserController::class, 'findUser']);
Route::put('/profile/{id}', [App\Http\Controllers\UserController::class, 'updateUser']);

Route::middleware('auth:sanctum')->group(function () { // harus udah ada token
    Route::post('/goals', [App\Http\Controllers\GoalController::class, 'setGoal']);
    Route::get('/goals', [App\Http\Controllers\GoalController::class, 'getGoals']);
    Route::get("/user", [App\Http\Controllers\AppController::class, "user"]);
    Route::post("/logout", [App\Http\Controllers\AppController::class, "logout"]);
});