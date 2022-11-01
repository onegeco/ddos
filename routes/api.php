<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Models\Product;
use Illuminate\Http\Response;


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

Route::group(['middleware' => 'throttle:5,1'], function () {

});

Route::get('all-products/{limit}', function (Request $request) {
    $products = Product::where('status', 'published')->where('visibility', 'public')->latest()->get();
    return response()->json(["message" => "Packet sent successfully", "User IP" => $request->ip(), 'status' => 200]);
});

Route::post('all-products', [ProductController::class, 'fetchProducts'])->name('fetch');
Route::post('all-products/v2', [ProductController::class, 'fetchProductsRLA'])->name('fetch.rla');