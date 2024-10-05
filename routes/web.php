<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});
//Route::inertia('/','Home',['user'=>'Saman']);
Route::get('/contact', function () {
    return Inertia::render('Contact');
});
Route::get('/about', function () {
    return inertia('About',['user'=>'Saman']);
});
