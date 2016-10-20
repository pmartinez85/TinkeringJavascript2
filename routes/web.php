<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/apicutre/user/1', function () {
    //abort(500);
    return "Usuari 1";
});



//Afegir una ruta per al post del exercisi del divendres


Route::post('/apicutre/user/1', function () {
    //abort(500);
    return "Usuari 1";
});