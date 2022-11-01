<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('product_name');
            $table->longText('product_description')->nullable();
            $table->double('price', 12,2)->default(0.00);
            $table->integer('discount')->default(0);
            $table->json('variations')->nullable();
            $table->integer('quantity')->default(0);
            $table->json('thumbnails');
            $table->enum('status', ['published', 'scheduled', 'draft'])->default('published');
            $table->enum('visibility', ['public', 'hidden'])->default('public');
            $table->integer('rate_limit')->default(5);
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
        Schema::dropIfExists('products');
    }
};
