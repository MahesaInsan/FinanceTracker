<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Model;

class Goal extends Model
{
    use HasFactory;
    public $guarded = ["id"];

    public function transaction(): HasMany{
        return $this->hasMany(Transaction::class);
    }
}