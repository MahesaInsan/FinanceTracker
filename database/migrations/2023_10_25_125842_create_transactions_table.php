<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->date("tDate");
            $table->string("note");
            $table->unsignedBigInteger("card_id");
            $table->unsignedBigInteger("type_id");
            $table->unsignedBigInteger("goal_id")->nullable();
            $table->timestamps();

            $table->foreign("card_id")->references("id")->on("cards");
            $table->foreign("type_id")->references("id")->on("transaction_types");
            $table->foreign("goal_id")->references("id")->on("goals");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
