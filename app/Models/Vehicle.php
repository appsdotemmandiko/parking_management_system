<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    use HasFactory;

    protected $fillable = [
        'emp_id',
        'regno',
        'make',
        'model'
    ];

    public function emp()
    {
        return $this->belongsTo(Employee::class);
    }
}
