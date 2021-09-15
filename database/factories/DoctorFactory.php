<?php

namespace Database\Factories;

use App\Models\Doctor;
use Illuminate\Database\Eloquent\Factories\Factory;

class DoctorFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Doctor::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'email' => $this->faker->unique()->safeEmail(),
            'address' => $this->faker->address,
            'phone_number' => $this->faker->phoneNumber,
            'department' => $this->faker->randomElement(['Dentist', 'Dental Anesthesiology']),
            'description' => $this->faker->sentence,
        ];
    }
}
