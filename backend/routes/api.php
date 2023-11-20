<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\LocalController;
use App\Http\Controllers\Api\CategoriasController;
use App\Http\Controllers\Api\HomeController;
use App\Http\Controllers\Api\ReporteController;
use App\Http\Controllers\Api\SubcategoriasController;
use App\Http\Controllers\Api\UsuariosController;
use App\Http\Controllers\Api\AuthController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/




Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);
Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');





Route::apiResource('locales', LocalController::class);
Route::apiResource('categorias', CategoriasController::class);
Route::apiResource('subcategorias', SubcategoriasController::class);
Route::get('reportes', [ReporteController::class, 'generarPDF']);
Route::apiResource('usuarios', UsuariosController::class);
Route::post('login', [UsuariosController::class,'login']);


Route::apiResource('home', HomeController::class);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware(['auth:sanctum'])->group(function (){
  
});
