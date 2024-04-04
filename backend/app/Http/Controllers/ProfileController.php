<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Storage;

class ProfileController extends Controller
{
    public function fetchProfileInfo() {
        $user =  Auth::user();
        return response()->json(['user' => $user]);
    }
    public function updateProfilInfo(Request $request) {
        $profileImgPath =Storage::disk('public')->putFile('profile_image', $request->file('profile_image'));
        $coverImgPath =Storage::disk('public')->putFile('cover_image', $request->file('cover_image'));
        try{
             User::find(auth()->user()->id)->update([
                'bio' => $request->bio,
                'profile_img' => $profileImgPath,
                'cover_img' => $coverImgPath,
            ]);
          
            return response()->json([
                'status' => true,
            ]);

        }catch(Exception $e) {
            return response()->json([
                'error' => $e->getMessage()
            ]);
        }
    }

    public function userDetails() {
        $user = User::where('name' , 'shuvo')->first();
        return response()->json([
            'profile_details' => $user
        ]);
    }

    public function socialProfileLinks(){
        $user =  Auth::user();
       $social_link =  User::where('id',$user->id)->pluck('social_links');
        return response()->json(['social_link' => $social_link]);
    }

    public function activitesOptions(){

    }   



}
