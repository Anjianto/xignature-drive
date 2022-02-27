<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class WriteProfileToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('phone', 15)->nullable();
            $table->string('nik', 16)->nullable();
            $table->date('birth_date')->nullable();
            $table->string('birth_place', 50)->nullable();
            $table->string('ktp', 191)->nullable();
            $table->string('selfie', 191)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('phone');
            $table->dropColumn('nik');
            $table->dropColumn('birth_date');
            $table->dropColumn('birth_place');
            $table->dropColumn('ktp');
            $table->dropColumn('selfie');
        });
    }
}
