<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWorkoutsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('workouts', function (Blueprint $table) {
            $table->id();
            $table->BigInteger("user_id")->comment("ユーザーID");
            $table->integer("menu")->comment("メニューID");
            $table->integer("weight")->comment("ウェイト");
            $table->integer("rep")->comment("レップ数");
            $table->text("comment")->comment("コメント");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('workouts');
    }
}
