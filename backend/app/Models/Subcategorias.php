<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subcategorias extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre',
        'descripcion',
        'estado',
        'categorias_id',



];


    public function categorias()
    {
        return $this->hasMany(Categorias::class, 'id');
    }

    public function locales()
    {
        return $this->belongsToMany(Local::class);
    }
}
