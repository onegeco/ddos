<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    use HasFactory;

    protected $fillable = [ 'id', 'user_id', 'name', 'phone', 'address', 'role', 'status' ];
    
    protected $hidden = [ 'id', 'user_id', 'role', 'created_at', 'updated_at' ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
