<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
/*
Route::group(['middleware' => 'throttle:3,1'], function () {
   
});
*/
Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/test/recaptcha', [HomeController::class, 'testRecaptcha'])->name('test.recaptcha');
Route::get('/test/rla', [HomeController::class, 'testRla'])->name('test.rla');


require __DIR__.'/auth.php';
require __DIR__.'/user.php';
