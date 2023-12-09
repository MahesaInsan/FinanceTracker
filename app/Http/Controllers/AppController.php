<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie as FacadesCookie;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Cookie;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Database\QueryException;

class AppController extends Controller
{
    public function checkEmail(Request $request)
    {
        $email = $request->input('email');
        $emailExist = User::where('email', $email)->exists();
        if ($emailExist){
            return response()->json([
                "message" => "Email is already exist!"
            ], Response::HTTP_BAD_REQUEST);
        }
    }

    public function register(Request $request)
    {
            User::create([
                'name' => $request->input('name'),
                'email' => $request->input('email'),
                'password' => Hash::make($request->input('password'))
            ]);

            return response()->json([
                'message' => 'User created successfully'
            ], Response::HTTP_ACCEPTED);
    }

    public function login(Request $request){
        if(!Auth::attempt($request->only('email', 'password'))){
            return response([
                "message" => "Email or Password is Not Valid!"
            ], Response::HTTP_UNAUTHORIZED);
        }

        $user = Auth::user();
        $token = $user->createToken('token')->plainTextToken;

        $cookie = cookie('jwt', $token, 60*2);

        return response([
            "message" => $token,
            "cookie" => $cookie
        ])->withCookie($cookie);
    }

    public function user()
    {
        return Auth::user();
    }

    public function getUserId()
    {
        $user = Auth::user();
        return $user->id;
    }

    public function logout()
    {
        $cookie = FacadesCookie::forget('jwt');
        return response([
            "message" => "Success"
        ])->withCookie($cookie);
    }
}
