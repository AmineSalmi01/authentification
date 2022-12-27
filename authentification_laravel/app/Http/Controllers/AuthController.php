<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    function redirectToLogine()
    {
        return Socialite::driver('google')->with(["prompt" => "select_account"])->redirect();
    }

    function callback()
    {

        $user = Socialite::driver('google')->user();
        $user_google = User::updateOrCreate([
            'id_google' => $user->id,
        ], [
            'name' => $user->name,
            'email' => $user->email,
            'id_google' => $user->id,
            'token_google' => $user->token,
        ]);
        Auth::login($user_google);
        return redirect('/Todo');

    }
}
