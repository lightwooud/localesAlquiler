<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Categorias;

class CategoriasController extends Controller
{
    public function index()
    {
        // Obtener la lista de categorías
        $categorias = Categorias::all();
        return response()->json($categorias);
    }

    public function store(Request $request)
    {
        // Validar y almacenar una nueva categoría
        $data = $request->validate([
            'nombre' => 'required|string',
            'descripcion' => 'required|string', 
            'estado' => 'required|string',
        ]);

        $categorias = Categorias::create($data);

        return response()->json($categorias, 201);
    }

    public function show($id)
    {
        $data = Categorias::find($id);
        return response()->json($data,200);
    }

    public function update(Request $request,$id, Categorias $categorias)
    {
        // Validar y actualizar una categoría existente
        $data = $request->validate([
            'nombre' => 'required|string',
            'descripcion' => 'required|string', 
            'estado' => 'required|string',
        ]);
        $categorias = Categorias::find($id);
        $categorias->update($data);

        return response()->json($categorias);
    }

    public function destroy($id)
    {
        $categorias = Categorias::find($id);
        $categorias->delete();

        return response()->json(null, 204);
    }
}
