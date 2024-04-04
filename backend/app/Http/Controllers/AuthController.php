<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request) {

       
        // Validate the incoming request data
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users,email',
            'password' => 'required|string|min:6',
        ]);


        // Create a new user
        $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password']),
        ]);

        // Create a token for the newly registered user
        $token = $user->createToken('token-name')->plainTextToken;

        // Return the token along with any additional data you may need
        return response()->json([
            'user' => $user,
            'token' => $token,
        ], 200);
    }

    public function login(Request $request) {

        // Validate the user's credentials (e.g., email and password)
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // Attempt to authenticate the user
        if (!auth()->attempt($credentials)) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        // Retrieve the authenticated user
        $user = User::where('email', $request->email)->first();

        // Create a token for the authenticated user
        $token = $user->createToken('token-name')->plainTextToken;

        // Return the token as a JSON response
        return response()->json(['token' => $token]);
    }


    public function getUser() {
        $users = User::all();
        return $users;
    }
}
