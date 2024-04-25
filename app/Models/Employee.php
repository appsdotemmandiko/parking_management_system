<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'pfno',
        'designation',
        'department',
        'directorate',
        'mobile',
        'altno'
    ];

    public function vehicl()
    {
        return $this->hasMany(Vehicle::class);
    }
}
