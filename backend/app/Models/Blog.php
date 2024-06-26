<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;
    public function comments()
    {
        return $this->morphMany('App\Comment', 'commentable');
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
}
