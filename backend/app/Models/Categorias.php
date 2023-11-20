<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categorias extends Model
{
    use HasFactory;

    protected $fillable = [

        'nombre',
        'descripcion',
        'estado',

];

public function subcategorias()
{
    return $this->hasMany(Subcategorias::class, 'categorias_id');
}
}
