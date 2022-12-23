<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    function redirectToLogine()
    {
        return Socialite::driver('google')->redirect();
    }

    function callback()
    {
        try{
        $user_google = Socialite::driver('google')->stateless()->user();
        $user = User::where('id_google', $user_google->getId())->first();

        if(!$user){
            $add_user = User::create([
                "name" => $user_google->getName(),
                "email" => $user_google->getEmail(),
                "id_google" => $user_google->getId(),

            ]);
            Auth::login($add_user);
            return redirect()->intended('/dashboard');
        }
        else
        {
            Auth::login($user);
            return redirect()->intended('/dashboard');

        }

        }
        catch(\Throwable $th)
        {
            dd('error'.$th->getMessage());
        }
        // $user = Socialite::driver('google')->user();
        // dd($user);
    }


}
