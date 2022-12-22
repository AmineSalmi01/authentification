<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Support\Facades\Auth;            
use Illuminate\Http\Request;

class TodosController extends Controller
{
    public function index()
    {
        $todos = Todo::all();
        return view('todo' , compact('todos'));
    }

    public function add(Request $request)
    {
        if(Auth::check())
        {
            $add_todo = new Todo();
            $add_todo->name = $request->name;
            $add_todo->save();
            return redirect('/Todo');
        }
        else
        {
            return redirect('/login');
        }

    }

}
