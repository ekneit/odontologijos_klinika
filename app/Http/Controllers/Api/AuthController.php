<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class AuthController extends Controller
{
    public function register(Request $request): JsonResponse
    {
        $request->validate([
                'email' => 'required|unique:users|email:rfc,dns',
                'name' => 'required|max:255',
                'password' => [
                    'required',
                    'confirmed',
                    Password::min(4)
                ],
            ]
        );
        $user = User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => Hash::make($request['password']),
        ]);
        $authToken = $user->createToken('auth-token')->plainTextToken;
        return response()->json([
            'user' => $user,
            'access_token' => $authToken
        ]);
    }

    public function login(Request $request): JsonResponse
    {
        $request->validate([
                'email' => 'required',
                'password' => [
                    'required',
                    Password::min(4)
                ],
            ]
        );
        if (!auth()->attempt(request(['email', 'password']))) {
            return response()->json([
                'message' => 'The given data was invalid.',
                'errors' => [
                    'password' => [
                        'Invalid credentials'
                    ],
                ]
            ], 422);
        }
        $user = User::where('email', $request->email)->first();
        $authToken = $user->createToken('auth-token')->plainTextToken;

        return response()->json([
            'access_token' => $authToken,
        ]);
    }

    public function logout()
    {
        Auth::logout();
    }
}
