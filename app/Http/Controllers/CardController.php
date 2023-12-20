<?php

namespace App\Http\Controllers;

use App\Models\Card;
use App\Http\Requests\StoreCardRequest;
use App\Http\Requests\UpdateCardRequest;
use App\Models\Transaction;
use Illuminate\Http\Request;

class CardController extends Controller
{
    public function __construct(protected AppController $user){ }

    /**
     * Display a listing of the resource.
     */
    public function getCards(){
        $user = $this->user->user();
        $cards = Card::where('user_id', $user->id)->get();
        return response()->json([
            'cards' => $cards
        ]);
    }

    public function createCard(Request $request)
    {
        $user = $this->user->user();
        if($user){
            Card::create([
                'name' => $request->input("name"),
                'amount' => $request->input("amount"),
                'note' => $request->input("note"),
                "startDate" => $request->input("startDate"),
                "endDate" => $request->input("endDate"),
                "account" => $request->input("account"),
                "user_id" => $user->id
            ]);
        }
    }

    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */


    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCardRequest $request)
    {
        //
    }

    public function getTotal(){
        $user = $this->user->user();
        $cards = Card::where('user_id', $user->id)->get();
        $transaction = Transaction::with('TransactionType')->get();
        $total = 0;
        $totIncome = 0;
        $totExpense = 0;
        foreach ($cards as $card) {
            $total += $card->balance;
        }
        foreach ($transaction as $tran){
            if($tran->transactionType->type == "Income"){
                $totIncome += $tran->amount;
            }else $totExpense += $tran->amount;
        }
        return response()->json([
            'total' => $total,
            'totIncome' => $totIncome,
            'totExpense' => $totExpense,
        ]);
    }

    public function addCard(Request $request){
        $user = $this->user->user();
        if ($user) {
            Card::create([
                'name' => $request->input("name"),
                "number" => $request->input("number"),
                'type' => $request->input("type"),
                "balance" => $request->input("balance"),
                "expiredDate" => $request->input("date"),
                "user_id" => $user->id,
                "colour" => "785AA6"
            ]);
        }

        return response()->json([
            'name' => $request->input("name"),
            "number" => $request->input("number"),
            'type' => $request->input("type"),
            "balance" => $request->input("balance"),
            "expiredDate" => $request->input("date"),
            "user_id" => $user->id,
            "colour" => "785AA6"
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function getUserCards()
    {
        $user = $this->user->user();
        $cards = Card::where('user_id', $user->id)->get();
        return response()->json([
            'cards' => $cards
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Card $card)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCardRequest $request, Card $card)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Card $card)
    {
        //
    }
}
