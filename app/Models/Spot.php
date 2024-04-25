<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Spot extends Model
{
    use HasFactory;

    protected $fillable = [
        'lot_id',
        'no',
        'status'
    ];
    
    public function p_lot()
    {
        return $this->belongsTo(Lot::class);
    }
}
