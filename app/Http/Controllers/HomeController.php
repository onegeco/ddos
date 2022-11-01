<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;

class HomeController extends Controller
{
    public function index() {
        return Inertia::render('Welcome', [
            'products' => Product::where('status', 'published')->where('visibility', 'public')->latest()->paginate(12)
        ]);
    }

    public function testRecaptcha() {
        return Inertia::render('Recaptcha', [
            'domain_url' => env('APP_URL'),
        ]);
    }

    public function testRla() {
        return Inertia::render('Rla', [
            'domain_url' => env('APP_URL'),
        ]);
    }
}
