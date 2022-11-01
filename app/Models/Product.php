<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_name', 'product_description', 'price', 'discount', 'variations', 'quantity', 'thumbnails', 'status', 'visibility', 'rate_limit'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'variations' => 'array',
        'thumbnails' => 'array'
    ];
}
