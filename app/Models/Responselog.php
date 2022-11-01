<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Responselog extends Model
{
    use HasFactory;

    protected $fillable = [ 'status', 'reason', 'code', 'request_url', 'ip' ];
}
