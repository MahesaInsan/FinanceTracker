<?php

namespace Database\Seeders;

use App\Models\Card;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Carbon\Carbon;

class CardSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $cardType = ["Credit", "Debit"];
        $cardColour = ["Red", "Blue", "Yellow"];
        $userId = User::pluck('id')->toArray();
        Card::create([
            "name" => "Card A",
            "number" => fake()->randomNumber,
            "type" => fake()->randomElement($cardType),
            "expiredDate" => Carbon::create(fake()->date()),
            "balance" => fake()->numberBetween(850000, 5000000),
            "colour" => fake()->randomElement($cardColour),
            "user_id" => fake()->randomElement($userId),
        ]);
        Card::create([
            "name" => "Card B",
            "number" => fake()->randomNumber,
            "type" => fake()->randomElement($cardType),
            "expiredDate" => Carbon::create(fake()->date()),
            "balance" => fake()->numberBetween(850000, 5000000),
            "colour" => fake()->randomElement($cardColour),
            "user_id" => fake()->randomElement($userId),
        ]);
        Card::create([
            "name" => "Card C",
            "number" => fake()->randomNumber,
            "type" => fake()->randomElement($cardType),
            "expiredDate" => Carbon::create(fake()->date()),
            "balance" => fake()->numberBetween(850000, 5000000),
            "colour" => fake()->randomElement($cardColour),
            "user_id" => fake()->randomElement($userId),
        ]);
    }
}