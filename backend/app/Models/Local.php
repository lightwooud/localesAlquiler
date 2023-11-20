<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Local extends Model
{
    use HasFactory;

    protected $table = 'locales_comerciales';

    protected $fillable = [

        'nombre_negocio',
        'ubicacion',
        'nombre_replegal',
        'apellido_replegal',
        'telefono',
        'estado',
        'subcategorias_id',
    ];

    /*public function representante()
    {
        return $this->hasOne(User::class, 'local_id')->where('rol', 'representante');
    }

    // Relación con la categoría del local
    public function subcategorias()
    {
        return $this->belongsToMany(Subcategorias::class);
    }*/
}
