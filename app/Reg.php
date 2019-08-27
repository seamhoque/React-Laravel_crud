<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reg extends Model
{
    protected $fillable = [
        'name', 'position','location','salary'
    ];
}
