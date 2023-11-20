<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Local;

class LocalController extends Controller
{
    public function index()
    {
        
        $locales= local::join('subcategorias', 'locales_comerciales.subcategorias_id', '=', 'subcategorias.id')
        ->where('locales_comerciales.estado','!=', 'INACTIVO')
        ->select('locales_comerciales.*','subcategorias.nombre as nombresubcategoria')
        ->get();
        return response()->json($locales);
    }

    public function store(Request $request)
    {
        
        $data = $request->validate([
            'nombre_negocio' => 'required|string',
            'ubicacion' => 'required|string',
            'nombre_replegal' => 'required|string',
            'apellido_replegal' => 'required|string',
            'telefono' => 'required|string',
            'estado' => 'required|string',
            'subcategorias_id'=>'required',
        ]);

        $local = Local::create($data);

        return response()->json($local, 201);
    }

    public function show($id)
    {
        $data = Local::find($id);
        return response()->json($data,200);
    }

    public function update(Request $request,$id, Local $local)
    {
       
        $data = $request->validate([
            'nombre_negocio' => 'required|string',
            'ubicacion' => 'required|string',
            'nombre_replegal' => 'required|string',
            'apellido_replegal' => 'required|string',
            'telefono' => 'required|string',
            'estado' => 'required|string',
            'subcategorias_id' => 'required',
            
        ]);
        $local = Local::find($id);
        $local->update($data);

        return response()->json($local,201);
    }

    public function destroy($id)
    {
        $local = Local::find($id);
        $local->delete();
        return response()->json(null, 204);
    }
}
