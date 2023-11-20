<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Subcategorias;


class SubcategoriasController extends Controller
{
    public function index()
    {
        // Obtener la lista de subcategorías
        $subcategorias = Subcategorias::join('categorias', 'subcategorias.categorias_id', '=', 'categorias.id')
        ->where('subcategorias.estado','!=', 'INACTIVO')
        ->select('subcategorias.*','categorias.nombre as nombrecategoria')
        ->get();


        return response()->json($subcategorias);
    }


    public function store(Request $request)
    {
        

        $data = $request->validate([
            'nombre' => 'required|string',
            'categorias_id' => 'required|exists:categorias.id',
            'estado' => 'required',
            'descripcion' => 'required|min:3',
          
        ]);

        $subcategoria = Subcategorias::create($data);

        return response()->json($subcategoria, 201);
    }

    public function show($id)
    {
        $data = Subcategorias::find($id);
        return response()->json($data);
    }

    

    public function update(Request $request, $id )
    {
        
        $data = $request->validate([
            'nombre' => 'required|string',
            'estado' => 'required',
            'descripcion' => 'required|min:3',
            'categorias_id' => 'required',
           
        ]);
        $subcategoria = Subcategorias::find($id);
        $subcategoria->update($data);

        return response()->json($subcategoria,201);
    }

    public function destroy($id)
    {
        
        $subcategoria = Subcategorias::find($id);
        $subcategoria->delete();

        return response()->json(null, 204);
    }
}
