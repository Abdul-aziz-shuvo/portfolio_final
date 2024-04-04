<?php

namespace App\Http\Controllers;

use App\Models\Feed;
use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FeedController extends Controller
{

    public function createFeed(Request $request) {
       
        $feedImg =Storage::disk('public')->putFile('feed_img', $request->file('img'));

       $feeds =  Feed::create([
        'content' => $request->content,
        'img' => $feedImg
       ]);
       return response()->json([
        'status' => true,
        'feeds' => $feeds
       ]);
    }
    public function getAllFeed() {
        $feeds =  Feed::all();
        return response()->json(['feeds' => $feeds]);
    }
    public function getFeedById($id) {
        $feed = Feed::where('id',$id)->get();
        return response()->json(['feed'=> $feed]);
    }

    public function commentByFeed($id){
        $comments  = Comment::where('commentable_id',$id)->get();
        return response()->json(['comments' => $comments]);
    }
}
