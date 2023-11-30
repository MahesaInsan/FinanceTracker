<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function __construct(protected AppController $user) { }
    /**
     * Display a listing of the resource.
     */
    public function index() 
    {
        $users = User::all();
        return response()->json([
            'users' => $users
        ]);
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function findUser()
    {   
        $user = $this->user->user();
        return response()->json([
            'user' => $user,
            'message' => 'Successfully get user data'
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function updateUser(Request $request)
    {
        $user = $this->user->user();
        if($request->input('password') == 'empty'){
            $user->name = $request->input('name');
            $user->email = $request->input('email');
            $user->bio = $request->input('bio');
        }else{
            $user->name = $request->input('name');
            $user->email = $request->input('email');
            $user->password = Hash::make($request->input('password'));
            $user->bio = $request->input('bio');
        }
        $user->update();
        return response()->json([
            'status' =>200,
            'message' => 'User updated successfully'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
