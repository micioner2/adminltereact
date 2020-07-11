<?php

use Illuminate\Support\Facades\Route;

/*
    SI VAMOS AGREGAR RUTAS QUE SEAN PARA ARRIBA
*/

Route::get( '/{path?}', function(){
    return view( 'view' );
} )->where('path', '.*');

// Route::get('/{path?}', [
//     'uses' => 'CursoController@index',
//     'as' => 'react',
//     'where' => ['path' => '.*']
// ]);
// Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');


