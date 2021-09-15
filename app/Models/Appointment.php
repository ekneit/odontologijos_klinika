<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Appointment extends Model
{
    use HasFactory, HasApiTokens;
    protected $fillable = [
        'doctor_id',
        'patient_id',
        'date',
        'status'
    ];

    public function doctor(){
        return $this->belongsTo(Doctor::class,'doctor_id','id');
    }
    public function patient(){
        return $this->belongsTo(Patient::class,'patient_id','id');
    }
}
