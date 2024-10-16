<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//Route::get('/', function () {
//    return Inertia::render('Home');
//});

Route::get('/', function () {
//    sleep(2);
    return Inertia('Home',);
})->name('home');

Route::inertia('/about','About',['user'=>'sam'])->name('about');
