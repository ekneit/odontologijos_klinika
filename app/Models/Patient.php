<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Patient extends Model
{
    use HasFactory,HasApiTokens;
    protected $fillable = [
        'name',
        'email',
        'phone_number',
    ];

}
