<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Http\Resources\ProductResource;

class HomeController extends Controller
{
    public function allProduct() {

        $products = Product::latest()->get();

        $data = [
            'success' => true,
            'products' => $products,
            'message' => 'All products retrieved successfully'
        ];

        return new ProductResource($data);
    }
}
