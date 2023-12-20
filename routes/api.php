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
Route::post("/check-email", [App\Http\Controllers\AppController::class, 'checkEmail']);
Route::post("/login", [App\Http\Controllers\AppController::class, "login"]);

Route::middleware('auth:sanctum')->group(function () { // harus udah ada token
    Route::post('/goals', [App\Http\Controllers\GoalController::class, 'setGoal']);
    Route::get('/goals', [App\Http\Controllers\GoalController::class, 'getGoals']);
    Route::get('/cards', [App\Http\Controllers\CardController::class, 'getCards']);
    Route::post('/cards', [App\Http\Controllers\CardController::class, 'addCard']);
    Route::get('/cards/total', [App\Http\Controllers\CardController::class, 'getTotal']);
    Route::get('/transaction', [App\Http\Controllers\TransactionController::class, 'getTransactions']);
    Route::post('/transaction/create', [App\Http\Controllers\TransactionController::class, 'setTransaction']);
    Route::post('/transaction/invest', [App\Http\Controllers\TransactionController::class, 'setInvest']);
    Route::get('/transaction/income', [App\Http\Controllers\TransactionTypeController::class, 'getIncome']);
    Route::get('/transaction/expense', [App\Http\Controllers\TransactionTypeController::class, 'getExpense']);
    // Route::get('/income', [App\Http\Controllers\TransactionController::class, 'getTransaction']);
    Route::get("/user", [App\Http\Controllers\AppController::class, "user"]);
    Route::post("/logout", [App\Http\Controllers\AppController::class, "logout"]);
    Route::get('/profile', [App\Http\Controllers\UserController::class, 'findUser']);
    /* Route::get('/profile', [App\Http\Controllers\CardController::class, 'getUserCards']); */
    Route::put('/profile', [App\Http\Controllers\UserController::class, 'updateUser']);
});
