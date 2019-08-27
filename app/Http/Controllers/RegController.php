<?php

namespace App\Http\Controllers;

use App\Reg;
use Illuminate\Http\Request;

class RegController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $regs = Reg::all();
        return response()->json($regs);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $reg = new Reg([
            'name' => $request->get('name'),
            'position' => $request->get('position'),
            'location' => $request->get('location'),
            'salary' => $request->get('salary'),
        ]);
        $reg->save();


        return response()->json('Product Added Successfully.');


    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Reg  $reg
     * @return \Illuminate\Http\Response
     */
    public function show(Reg $reg)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Reg  $reg
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $reg = Reg::find($id);
        return response()->json($reg);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Reg  $reg
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $reg = Reg::find($id);
        $reg->name = $request->get('name');
        $reg->position = $request->get('position');
        $reg->location = $request->get('location');
        $reg->salary = $request->get('salary');

        $reg->save();


        return response()->json('jesse pinkman here.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Reg  $reg
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $reg = Reg::find($id);
        $reg->delete();


        return response()->json('Product Deleted Successfully.');
    }
}
