<?php

namespace App\Http\Controllers;

use App\Models\Goal;
use Illuminate\Http\Request;
use App\Http\Requests\StoreGoalRequest;
use App\Http\Requests\UpdateGoalRequest;
use Illuminate\Support\Facades\Auth;

class GoalController extends Controller
{
    public function getGoals(){
        $goals = Goal::all();
        return response()->json([
            'goals' => $goals
        ]);
    }

    public function setGoal(Request $request)
    {
        Goal::create([
            'name' => $request->input("name"),
            'amount' => $request->input("amount"),
            'note' => $request->input("note"),
            "startDate" => $request->input("startDate"),
            "endDate" => $request->input("endDate"),
            "account" => $request->input("account")
        ]);
        // return Auth::user();
        return response()->json([
            "user" => Auth::user(),
            'name' => $request->input("name"),
            'amount' => $request->input("amount"),
            'note' => $request->input("note"),
            "startDate" => $request->input("startDate"),
            "endDate" => $request->input("endDate"),
            "account" => $request->input("account")
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