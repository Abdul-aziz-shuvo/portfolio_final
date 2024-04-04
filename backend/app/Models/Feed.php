<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feed extends Model
{
    use HasFactory;
    protected $fillable = ['title','content','img'];
    public function comments()
    {
        return $this->morphMany('App\Comment', 'commentable');
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
}
