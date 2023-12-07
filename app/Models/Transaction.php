<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $guarded = ["id"];
    // protected $fillable = ['tDate', 'note', 'card_id', 'transaction_type_id', 'user_id', 'goal_id'];
    use HasFactory;

    public function card(): BelongsTo{
        return $this->belongsTo(Card::class);
    }

    public function goal(): BelongsTo{
        return $this->belongsTo(Goal::class);
    }

    public function transactionType(): BelongsTo{
        return $this->belongsTo(TransactionType::class);
    }
}
