<?php

namespace App\Http\Controllers;

use App\Setting;
use Doctrine\DBAL\Driver\PDOException;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Response;
use Symfony\Component\HttpKernel\Exception\HttpException;

class AppFunctionsController extends Controller
{
    /**
     * Show index page
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        try {
            $connection = $this->get_setup_status();
            $settings = json_decode(Setting::all()->pluck('value', 'name')->toJson());

        } catch (PDOException $e) {
            $connection = 'setup-database';
            $settings = null;
        }

        return view("index")
            ->with('settings', $settings)
            ->with('installation', $connection);
    }

    /**
     * @return string
     */
    private function get_setup_status(): string
    {
        \DB::getPdo();

        $setup_success = Setting::where('name', 'setup_wizard_success')->first();

        $connection = $setup_success ? 'setup-done' : 'setup-disclaimer';

        return $connection;
    }
}
