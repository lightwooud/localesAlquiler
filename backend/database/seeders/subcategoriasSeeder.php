<?php

namespace Database\Seeders;

use App\Models\Categorias;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Subcategorias;

class subcategoriasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {

          
          $categoriaAlimentos = Categorias::where('nombre', 'Alimentos')->first();

          Subcategorias::create(['nombre' => 'Frutas','descripcion' => 'FRUTAS',
          'estado' => 'ACTIVO', 'categorias_id' => $categoriaAlimentos->id]);
          Subcategorias::create(['nombre' => 'Verduras','descripcion' => 'FRUTAS',
          'estado' => 'ACTIVO', 'categorias_id' => $categoriaAlimentos->id]);
          Subcategorias::create(['nombre' => 'Granos','descripcion' => 'FRUTAS',
          'estado' => 'ACTIVO', 'categorias_id' => $categoriaAlimentos->id]);


          
          $categoriaRopa = Categorias::where('nombre', 'Ropa y textiles')->first();

          Subcategorias::create(['nombre' => 'PARA HOMBRE',
          'descripcion' => 'VESTIMENTA PARA HOMBRE',
          'estado' => 'ACTIVO', 'categorias_id' => $categoriaRopa->id]);

          Subcategorias::create(['nombre' => 'PARA NIÑOS',
          'descripcion' => 'VESTIMENTA PARA NIÑOS',
          'estado' => 'ACTIVO', 'categorias_id' => $categoriaRopa->id]);

          Subcategorias::create([ 'nombre' => 'PARA MUJER',
          'descripcion' => 'VESTIMENTA PARA MUJER',
          'estado' => 'ACTIVO', 'categorias_id' => $categoriaRopa->id]);

          Subcategorias::create([ 'nombre' => 'MIXTOS',
          'descripcion' => 'VESTIMENTA',
          'estado' => 'ACTIVO', 'categorias_id' => $categoriaRopa->id]);


          $categoriaDeportes = Categorias::where('nombre', 'Deportes')->first();
          Subcategorias::create([  'nombre' => 'FUTBOL',
          'descripcion' => 'OBJETOS PARA FUTBOL',
          'estado' => 'ACTIVO', 'categorias_id' => $categoriaDeportes->id]);
   
          Subcategorias::create([  'nombre' => 'BALONCESTO',
          'descripcion' => 'OBJETO PARA BALONCESTO',
          'estado' => 'ACTIVO', 'categorias_id' => $categoriaDeportes->id]);

          Subcategorias::create([ 'nombre' => 'VOLEIBOL',
          'descripcion' => 'OBJETO PARA VOLEIBOL',
          'estado' => 'ACTIVO', 'categorias_id' => $categoriaDeportes->id]);




            
           
        
    }
    
}
