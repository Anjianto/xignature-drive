<?php

use App\Setting;
use App\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \Illuminate\Support\Facades\Schema::disableForeignKeyConstraints();
        User::truncate();
        factory(User::class, 3)->create();

//        $settings = Setting::whereIn('name', ['api_key'])->pluck('value', 'name');
//        foreach (User::all() as $user) {
//            $response = \Illuminate\Support\Facades\Http::withHeaders([
//                'api-key' => $settings['api_key'],
//                'Content-Type' => 'application/json'
//            ])->post(config('app.api') . 'v1/auth/generateLtcToken', [
//                "email" => $user['email'],
//                "fullname" => $user['name'],
//                "nik" => $user['nik'],
//                "phone" => $user['phone'],
//                "birthdate" => $user['birth_date'],
//                "birthplace" => $user['birth_place'],
//                "selfie" => base64_encode(file_get_contents($user['selfie'])),
//                "ktp" => base64_encode(file_get_contents($user['ktp']))
//            ])->object();
//
//            if ($response->statusCode == 200) {
//                $user->signatures()->create([
//                    'sign_token' => $response->data->token
//                ]);
//            }

//        }
    }


}
