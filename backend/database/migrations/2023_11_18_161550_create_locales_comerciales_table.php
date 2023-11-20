<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLocalesComercialesTable extends Migration
{
   
    public function up(): void
    {
        Schema::create('locales_comerciales', function (Blueprint $table) {
            $table->id();
            $table->string('nombre_negocio');
            $table->string('ubicacion');
            $table->string('nombre_replegal');
            $table->string('apellido_replegal');
            $table->string('telefono');
            $table->string('estado');
            $table->unsignedBigInteger('subcategorias_id');
            $table->timestamps();

            $table->foreign('subcategorias_id')->references('id')->on('subcategorias');
        });
    }

    
    public function down(): void
    {
        Schema::dropIfExists('locales_comerciales');
    }
};
