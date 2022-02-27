<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\User;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'phone' => $faker->e164PhoneNumber,
        'nik' => $faker->nik,
        'birth_date' => $faker->dateTimeBetween('-30 years', '-20 years'),
        'birth_place' => $faker->city,
        'email_verified_at' => now(),
        'password' => bcrypt('secret'), // password
        'remember_token' => Str::random(10),
        'ktp' => \Illuminate\Http\UploadedFile::fake()->image('ktp.jpg', 300, 400)->store('ktp'),
        'selfie' => \Illuminate\Http\UploadedFile::fake()->image('selfie.jpg', 512, 512)->store('selfie'),
    ];
});
