<?php

namespace App\Http\Controllers;

use App\Models\Card;
use App\Http\Requests\StoreCardRequest;
use App\Http\Requests\UpdateCardRequest;
use Illuminate\Http\Request;

class CardController extends Controller
{
    public function __construct(protected AppController $user){ }

    /**
     * Display a listing of the resource.
     */
    public function getCards(){
        $cards = Card::all();
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
