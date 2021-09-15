<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Doctor;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class DoctorController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum', ['except' => [
            'index',
            'show',
        ]]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        $doctors = Doctor::all();
        return response()->json([
            'doctors' => $doctors,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        $request->validate([
                'name' => 'required|max:255',
                'email' => 'required',
                'address' => 'required|max:255',
                'department' => 'required|max:255',
                'phone_number' => 'required|max:255|digits:9|unique:doctors',
                'description' => 'required|max:255',
            ]
        );
        $doctor = Doctor::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'address' => $request['address'],
            'department' => $request['department'],
            'phone_number' => $request['phone_number'],
            'description' => $request['description'],
        ]);
        return response()->json([
            'doctor' => $doctor,
            'message' => 'Doctor added successfully',
        ]);

    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return JsonResponse
     */
    public function show($id)
    {
        $doctor = Doctor::where('id', $id)->get();
        return response()->json([
            'doctor' => $doctor,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param int $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return JsonResponse
     */
    public function destroy($id)
    {
        $doctor = Doctor::find($id);
        if(!$doctor){
            return response()->json([
                'message' => 'There is no doctor',
            ]);
        }else {
            $doctor->delete();
            return response()->json([
                'message' => 'Doctor deleted',
            ]);
        }
    }
}
