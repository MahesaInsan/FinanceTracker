<?php

namespace Database\Seeders;

use App\Models\TransactionType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TransactionTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        TransactionType::create([
            "name" => "Food",
            "logo" => "/transactionLogo/foodLogo",
            "type" => "Expense"
        ]);
        TransactionType::create([
            "name" => "Transportation",
            "logo" => "/transactionLogo/transportationLogo",
            "type" => "Expense"
        ]);
        TransactionType::create([
            "name" => "Daily",
            "logo" => "/transactionLogo/dailyLogo",
            "type" => "Expense"
        ]);
        TransactionType::create([
            "name" => "Salary",
            "logo" => "/transactionLogo/salaryLogo",
            "type" => "Income"
        ]);
        TransactionType::create([
            "name" => "Investment",
            "logo" => "/transactionLogo/investmentLogo",
            "type" => "Expense"
        ]);
        TransactionType::create([
            "name" => "Bonus",
            "logo" => "/transactionLogo/bonusLogo",
            "type" => "Income"
        ]);
    }
}
