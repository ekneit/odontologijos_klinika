<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class AppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        $appointments = Appointment::join('patients', 'appointments.patient_id', '=', 'patients.id')
            ->join('doctors', 'appointments.doctor_id', '=', 'doctors.id')
            ->select('appointments.id', 'appointments.status', 'doctors.id as doctor_id', 'doctors.name as doctor_name', 'patients.name', 'patients.phone_number', 'patients.email', 'appointments.date')
            ->orderBy('appointments.created_at', 'desc')
            ->get();

        return response()->json([
            'appointments' => $appointments,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {

    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return Response
     */
    public function show($id)
    {

    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param int $id
     * @return JsonResponse
     */
    public function update($id)
    {
        Appointment::where('id', $id)
        ->update(['status' => 1]);

        return response()->json([
            'message' => 'Updated',
        ]);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return JsonResponse
     */
    public function destroy($id)
    {
        $doctor = Appointment::find($id);
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
