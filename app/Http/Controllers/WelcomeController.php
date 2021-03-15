<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WelcomeController extends Controller
{
    public function index()
    {
        $aryData=["aaa","bbb","ccc"];
        return view("welcome",compact("aryData"));
    }
}
