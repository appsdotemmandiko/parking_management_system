<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lot extends Model
{
    use HasFactory;

    protected $fillable = [
        'description',
        'totalspots'
    ];

    public function spt()
    {
        return $this->hasMany(Spot::class);
    }
}
