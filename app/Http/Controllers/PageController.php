<?php
namespace App\Http\Controllers;

use Inertia\Inertia;

class PageController extends Controller
{
    public function index()
    {
        $simulator = config('simulator');

        return Inertia::render('Index', [
            'config' => $simulator
        ]);
    }
}
