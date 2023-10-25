<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Model;

class TransactionType extends Model
{
    use HasFactory;

    public function transaction(): HasMany{
        return $this->hasMany(Transaction::class);
    }
}
