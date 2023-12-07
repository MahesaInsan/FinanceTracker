<?php

namespace App\Http\Controllers;

use App\Models\Goal;
use Illuminate\Http\Request;
use App\Http\Requests\StoreGoalRequest;
use App\Http\Requests\UpdateGoalRequest;

class GoalController extends Controller
{
    public function __construct(protected AppController $user){ }

    public function getGoals(){
        $user = $this->user->user();
        $goals = Goal::where('user_id', $user->id)->get();
        return response()->json([
            'goals' => $goals
        ]);
    }

    public function setGoal(Request $request){
        $user = $this->user->user();
        if($user){
            Goal::create([
                'name' => $request->input("name"),
                'amount' => $request->input("amount"),
                'note' => $request->input("note"),
                "card_id" => $request->input("account"),
                "startDate" => $request->input("startDate"),
                "endDate" => $request->input("endDate"),
                "user_id" => $user->id
            ]);
        }

        // return Auth::user();
        return response()->json([
            "user" => $this->user->user(),
            'name' => $request->input("name"),
            'amount' => $request->input("amount"),
            'note' => $request->input("note"),
            "startDate" => $request->input("startDate"),
            "endDate" => $request->input("endDate")
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
    public function store(StoreGoalRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Goal $goal)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Goal $goal)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateGoalRequest $request, Goal $goal)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Goal $goal)
    {
        //
    }
}