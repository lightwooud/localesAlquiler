<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request)
    {

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            return response()->json(Auth::user(), 200);
        } else {
            return response()->json(['error' => 'Credenciales inválidas'], 401);
        }
    }

    public function register(Request $request)
    {
        

        $user = User::create([
            'name' => $request->name,
            'apellido' => $request->apellido,
            'local_id' => $request->local_id,
            'cargo' => $request->cargo,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        return response()->json($user, 201);
    }

    public function logout(Request $request)
    {
        // Lógica de cierre de sesión aquí
        // Utiliza Auth::logout o el método que prefieras

        Auth::logout();

        return response()->json(['message' => 'Logout exitoso']);
    }
}
