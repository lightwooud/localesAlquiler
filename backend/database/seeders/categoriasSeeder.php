<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Categorias;

class categoriasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {

        Categorias::create(['nombre' => 'Alimentos','descripcion' => 'ALIMENTOS',
        'estado' => 'ACTIVO',]);
        Categorias::create(['nombre' => 'Ropa y textiles','descripcion' => 'VESTIMENTA Y TELAS','estado' => 'ACTIVO',]);
        Categorias::create(['nombre' => 'Deportes',
        'descripcion' => 'ACTIVIDADES FISICAS',
        'estado' => 'ACTIVO',]);

       
    }
    
}