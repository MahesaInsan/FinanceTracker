<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Card extends Model
{
    use HasFactory;
    
    public function transaction(): HasMany{
        return $this->hasMany(Transaction::class);
    }

    public function user(): BelongsTo{
        return $this->belongsTo(User::class);
    }
}
