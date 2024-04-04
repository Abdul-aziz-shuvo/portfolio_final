<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\FeedController;
use App\Http\Controllers\ProfileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Symfony\Component\HttpKernel\Profiler\Profile;

Route::post('/register', [AuthController::class,'register']);
Route::post('/login', [AuthController::class,'login']);

// Route::get('/user', [AuthController::class,'getUser'])->middleware('auth:sanctum');
Route::post('/profile-update', [ProfileController::class,'updateProfilInfo'])->middleware('auth:sanctum');



//frontend 
Route::get('/user', [ProfileController::class,'userDetails']);
Route::get('/feeds', [FeedController::class,'getAllFeed']);
Route::post('/create-feed', [FeedController::class,'createFeed']);

