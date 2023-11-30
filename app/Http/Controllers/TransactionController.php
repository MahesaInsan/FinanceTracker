<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use App\Http\Requests\StoreTransactionRequest;
use App\Http\Requests\UpdateTransactionRequest;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    public function __construct(protected AppController $user) { }

    public function setTransaction(Request $request){
        $user = $this->user->user();
        
        if($user){
            Transaction::create([
                "tDate" => $request->input("date"),
                'note' => $request->input("note"),
                "card_id" => $request->input("account"),
                /* 'amount' => $request->input("amount"), */
                "transaction_type_id" => 1,
                "user_id" => $user->id
            ]);
        }

        return response()->json([
            'amount' => $request->input("amount"),
            'note' => $request->input("note"),
            "tDate" => $request->input("date"),
            "card_id" => $request->input("account"),
            "transaction_types_id" => 1,
            "user_id" => $user->id
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

    /**
     * Display the specified resource.
     */
    public function show(Transaction $transaction)
    {
        //
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
