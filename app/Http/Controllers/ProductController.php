<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use App\Rules\Recaptcha;
use App\Models\Responselog;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Products', [
            'products' => Product::latest()->paginate(15)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        return Inertia::render('CreateProduct', [
            'status' => $request->session()->get('success'),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Recaptcha $recaptcha)
    {
        DB::beginTransaction();

        $request->validate([
            'product_name' => ['required', 'string'],
            'product_description' => ['required', 'string'],
            'price' => ['required', 'numeric'],
            'stocks' => ['required', 'integer'],
            'img' => ['required', 'image', 'mimes:jpeg,jpg,png,gif,svg', 'max:2048'],
            'status' => ['required'],
            'recaptcha' => ['required', $recaptcha],
        ]);

        try {

            if($request->hasFile('img')) {
                $imageName = time().'.'.$request->img->extension();
                $path = 'uploads';
                $location = Storage::disk('s3')->put($path, $request->img);
                $location = Storage::disk('s3')->url($location);
            }

            $product = Product::create([
                'product_name' => $request->product_name,
                'product_description' => $request->product_description,
                'price' => $request->price,
                'discount' => $request->discount,
                'quantity' => $request->stocks,
                'thumbnails' => [$location],
                'status' => $request->status,
                'visibility' => $request->visibility
            ]);
             
            DB::commit();

            return response()->json(["success" => true, "message" => "Product uploaded successfully"], 200);
            
        } catch (\Throwable $th) {
            DB::rollback();
            Log::critical($th->getMessage());
            
            return response()->json(["success" => false, "message" => "Server Error, please contact the web master"], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Inertia::render('ViewProduct', [
            'product' => Product::findOrFail($id),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, $id)
    {
        return Inertia::render('EditProduct', [
            'product' => Product::findOrFail($id),
            'status' => $request->session()->get('success'),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Recaptcha $recaptcha)
    {
        DB::beginTransaction();

        $request->validate([
            'product_name' => ['required', 'string'],
            'product_description' => ['required', 'string'],
            'price' => ['required', 'numeric'],
            'stocks' => ['required', 'integer'],
            'status' => ['required'],
            'recaptcha' => ['required', $recaptcha],
        ]);

        try {
            $product = Product::findOrFail($request->product_id);
            
            Log::critical($request->img);

            if($request->hasFile('img') && $request->img != '') {
                $imageName = time().'.'.$request->img->extension();
                $path = 'uploads';
                $location = Storage::disk('s3')->put($path, $request->img);
                $location = Storage::disk('s3')->url($location);
                $path = [$location];
            } else {
                $path = $product->thumbnails;
            }

            Log::critical($path);
            $product->update([
                'product_name' => $request->product_name,
                'product_description' => $request->product_description,
                'price' => $request->price,
                'discount' => $request->discount,
                'quantity' => $request->stocks,
                'thumbnails' => $path,
                'status' => $request->status,
                'visibility' => $request->visibility
            ]);

            DB::commit();

            return response()->json(["success" => true, "message" => "Product updated successfully"], 200);
        } catch (\Throwable $th) {
            DB::rollback();
            Log::critical($th->getMessage());

            return response()->json(["success" => false, "message" => "Server Error, please contact the web master"], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }

    /**
     * Indicates if the validator should stop on the first rule failure.
     *
     * @var bool
     */
    protected $stopOnFirstFailure = true;

    public function fetchProducts(Request $request, Recaptcha $recaptcha)
    {
        $validator = Validator::make($request->all(), [
            'domain_url' => 'required|string|max:255',
            'endpoint' => 'required|string|max:255',
            'packets' => 'required|integer',
            'recaptcha' => ['required', $recaptcha],
        ]);        

        if($validator->fails()) {
            $log = Responselog::create([
                'status' => 'failed',
                'reason' => $validator->errors()->first('recaptcha'),
                'code' => 422,
                'request_url' => $request->domain_url . $request->endpoint,
                'ip' => $request->ip()
            ]);

            return response()->json(["message" => $validator->errors()->first('recaptcha'), "ip" => $request->ip(), "status" => 422], 422);
        } else {
            try {
                $products = Product::where('status', 'published')->where('visibility', 'public')->latest()->get();
    
                $log = Responselog::create([
                    'status' => 'success',
                    'reason' => 'Packet sent successfully',
                    'code' => 200,
                    'request_url' => $request->domain_url . $request->endpoint,
                    'ip' => $request->ip()
                ]);
    
                return response()->json(["message" => "Packet sent successfully", "ip" => $request->ip(), "status" => 200], 200);
            } catch (\Throwable $th) {
                DB::rollback();
                Log::critical($th->getMessage());
                return response()->json(["message" => $th->getMessage(), "ip" => $request->ip()], 500);
            }   
        }
    }

    public function fetchProductsRLA(Request $request, Recaptcha $recaptcha)
    {
        $validator = Validator::make($request->all(), [
            'domain_url' => 'required|string|max:255',
            'endpoint' => 'required|string|max:255',
            'packets' => 'required|integer',
            //'recaptcha' => ['required', $recaptcha],
        ]);        

        if($validator->fails()) {
            $log = Responselog::create([
                'status' => 'failed',
                'reason' => $validator->errors()->first('recaptcha'),
                'code' => 422,
                'request_url' => $request->domain_url . $request->endpoint,
                'ip' => $request->ip()
            ]);

            return response()->json(["message" => $validator->errors()->first('recaptcha'), "ip" => $request->ip(), "status" => 422], 422);
        } else {
            try {
                $products = Product::where('status', 'published')->where('visibility', 'public')->latest()->get();
    
                $log = Responselog::create([
                    'status' => 'success',
                    'reason' => 'Packet sent successfully',
                    'code' => 200,
                    'request_url' => $request->domain_url . $request->endpoint,
                    'ip' => $request->ip()
                ]);
    
                return response()->json(["message" => "Packet sent successfully", "ip" => $request->ip(), "status" => 200], 200);
            } catch (\Throwable $th) {
                DB::rollback();
                Log::critical($th->getMessage());
                return response()->json(["message" => $th->getMessage(), "ip" => $request->ip()], 500);
            }   
        }
    }
}
