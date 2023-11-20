<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Models\Local;
use Illuminate\Support\Facades\Hash;

class UsuariosController extends Controller
{
    public function index()
    {
        // Obtener la lista de usuarios
        $usuarios = User::join('locales_comerciales', 'users.local_id', '=', 'locales_comerciales.id')
        ->select('users.*', 'locales_comerciales.nombre_negocio as nombre_negocio')
        ->get();

        return response()->json($usuarios);
    }

    public function show()
    {
        $local = local::all();
        return response()->json($local);
    }

    public function  store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'apellido' => 'required|string',
            'local_id' => 'required',
            'cargo' => 'required',
            'password' => 'required|string|min:8',
            'email' => 'required|email|unique:users',
            
        ]);
        $users = new User();
        $users->password = Hash::make($request->input('password'));
        $users = User::create($data);

        return response()->json($users, 201);
    }


    public function update(Request $request,$id, User $usuario)
    {
        // Validar y actualizar un usuario existente
        $data = $request->validate([
            'name' => 'required|string',
            'apellido' => 'required|string',
            'local_id' => 'required',
            'cargo' => 'require',
            'password' => 'required|string|min:8',
            'email' => 'required|email|unique:users,email,'. $usuario->id,
            // Otros campos necesarios
        ]);
        $usuario = User::find($id);
        $usuario->update($data);

        return response()->json($usuario);
    }

    public function login (Request $request ){

        if(!Auth::attempt($request->only('email','password'))){
            return response()->json(['message'=>'Unauthorized'],401);
        }

        $users = User::where('email',$request['email'])->firstOrfail();
        $token = $users->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message'=> 'Hi'.$users->name,
            'accessToken' => $token,
            'token_type' => 'Bearer',
            'user' =>$users,
        ]);
    }

    public function logout(){
        Auth::user()->tokens()->delete();

        return[
            'message'=>'you have successfully logged out and the token was successfully deleted'
        ];
    }

    public function destroy(User $usuario)
    {
        // Eliminar un usuario
        $usuario->delete();

        return response()->json(null, 204);
    }
}
