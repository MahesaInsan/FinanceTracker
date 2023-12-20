<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use App\Models\TransactionType;
use App\Http\Requests\StoreTransactionRequest;
use App\Http\Requests\UpdateTransactionRequest;
use App\Models\Card;
use App\Models\Goal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use PhpParser\Node\Stmt\TryCatch;

use function PHPSTORM_META\type;

class TransactionController extends Controller
{
    public function __construct(protected AppController $user)
    {
    }

    public function setTransaction(Request $request)
    {
        $user = $this->user->user();

        if ($user) {
            Transaction::create([
                'amount' => $request->input("amount"),
                "tDate" => $request->input("date"),
                'note' => $request->input("note"),
                "card_id" => $request->input("account"),
                "transaction_type_id" => $request->input("type"),
                "user_id" => $user->id
            ]);

            $wallet = Card::findOrFail($request->input("account"));
            $tType = TransactionType::findOrFail($request->input("type"));
            if($tType->type == "Expense"){
                $wallet->balance = $wallet->balance - $request->input("amount");
                $wallet->save();
            }
            if($tType->type == "Income"){
                $wallet->balance = $wallet->balance + $request->input("amount");
                $wallet->save();
            }
        }

        return response()->json([
            'amount' => $request->input("amount"),
            'note' => $request->input("note"),
            "tDate" => $request->input("date"),
            "card_id" => $request->input("account"),
            'amount' => (int) $request->input("amount"),
            "transaction_types_id" => 1,
            "user_id" => $user->id
        ]);
    }

    public function setInvest(Request $request){
        $user = $this->user->user();

        if ($user) {
            Transaction::create([
                'amount' => $request->input("amount"),
                "tDate" => $request->input("date"),
                'note' => $request->input("note"),
                "card_id" => $request->input("account"),
                "goal_id" => $request->input("goal"),
                "transaction_type_id" => 5,
                "user_id" => $user->id
            ]);

            $goal = Goal::findOrFail($request->input("goal"));
            $goal->invested += $request->input("amount");
            $goal->save();
        }

        return response()->json([
            'amount' => $request->input("amount"),
            'note' => $request->input("note"),
            "tDate" => $request->input("date"),
            "card_id" => $request->input("account"),
            'amount' => (int) $request->input("amount"),
            "user_id" => $user->id
        ]);
    }

    public function getSpending(){
        $user = $this->user->user();
        $transactions = Transaction::with('transactionType')
        ->where('user_id', $user->id)
        ->get();
        $total = 0;
        $food = 0;
        $transportation = 0;
        $daily = 0;
        $investment = 0;

        $foodpcnt = 0.0;
        $transportpcnt = 0.0;
        $dailypcnt = 0.0;
        $invesmentpcnt = 0.0;

        foreach($transactions as $trans){
            if($trans->transactionType->type != "Income"){
                $total += $trans->amount;
            if($trans->transactionType->name == "Food"){
                $food = $trans->amount;
            }else if($trans->transactionType->name == "Transportation"){
                $transportation = $trans->amount;
            }else if($trans->transactionType->name == "Daily"){
                $daily = $trans->amount;
            }else if($trans->transactionType->name == "Investment"){
                $investment = $trans->amount;
            }
            }
        }

        $foodpcnt = $food / $total * 100;
        $transportpcnt = $transportation / $total * 100;
        $dailypcnt = $daily / $total * 100;
        $invesmentpcnt = $investment / $total * 100;

        return response()->json([
            'food' => $foodpcnt,
            'transportation' => $transportpcnt,
            'daily' => $dailypcnt,
            'invesment' => $invesmentpcnt,
        ]);

    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTransactionRequest $request)
    {
        //
    }

    public function getTransactions()
    {
        $user = $this->user->user();
        $transaction = Transaction::with('TransactionType')->where('user_id', $user->id)->get();

        return response()->json([
            "transaction" => $transaction
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function getTransaction()
    {
        $user = $this->user->user();
        $incomeCount = Transaction::where('user_id', $user->id)
        ->whereHas('transactionType', function ($query) {
            $query->where('type', 'income');
        })->count();
        $outcomeCount = Transaction::where('user_id', $user->id)
        ->whereHas('transactionType', function ($query) {
            $query->where('type', 'outcome');
        })->count();

        try {
            return response()->json([
                'income' => $incomeCount,
                'outcome' => $outcomeCount
            ]);
        } catch (\Exception $e) {
            // Log the error for debugging purposes
        Log::error('Error fetching income and outcome: ' . $e->getMessage());

        // Return an error response
        return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Transaction $transaction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTransactionRequest $request, Transaction $transaction)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Transaction $transaction)
    {
        //
    }
}
