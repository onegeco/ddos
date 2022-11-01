<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;


Route::group(['middleware' => ['auth']], function () {
   Route::get('/account/dashboard', [UserController::class, 'dashboard'])->name('dashboard');
   Route::get('/account/profile', [UserController::class, 'profile'])->name('profile');
   Route::get('/account/products', [ProductController::class, 'index'])->name('products');
   Route::get('/account/product/create', [ProductController::class, 'create'])->name('product.create');
   Route::post('/account/product/update', [ProductController::class, 'update'])->name('product.update');
   Route::get('/account/product/view/{id}', [ProductController::class, 'show'])->name('product.view');
   Route::get('/account/product/edit/{id}', [ProductController::class, 'edit'])->name('product.edit');
   Route::post('/account/product/store', [ProductController::class, 'store'])->name('product.store');
   Route::get('/account/admin/logs', [UserController::class, 'logs'])->name('logs');
});