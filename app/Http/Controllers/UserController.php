<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Product;
use App\Models\Responselog;

class UserController extends Controller
{
    protected function dashboard() {
        return Inertia::render('Dashboard', [
            'total_products' => Product::all()->count(),
            'customers' => User::all()->count()
        ]);
    }

    protected function logs() {
        return Inertia::render('Logs', [
            'all_logs' => Responselog::latest()->get()->map(function ($log) {
                return [
                    'id' => $log->id,
                    'status' => ucfirst($log->status),
                    'reason' => ucfirst($log->reason),
                    'code' => $log->code,
                    'ip' => $log->ip,
                    'request_url' => $log->request_url,
                    'created_at' => $log->created_at->format('m:s - jS M Y')
                ];
            })
        ]);
    }
}
