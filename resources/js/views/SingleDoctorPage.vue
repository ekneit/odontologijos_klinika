<template>
    <div class="container mx-auto mt-20 my-5 p-5">
        <div class="md:flex no-wrap md:-mx-2 ">
            <div class="w-full md:w-3/12 md:mx-2">
                <div class="bg-white p-3 border-t-4 border-green-400">
                    <div class="image overflow-hidden">
                        <img class="h-auto w-full mx-auto"
                             src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                             alt="">
                    </div>
                    <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">{{ doctor.name }}</h1>
                    <h3 class="text-gray-600 font-lg text-semibold leading-6">Owner at Her Company Inc.</h3>
                    <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">{{ doctor.description}}</p>
                    <ul
                        class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li class="flex items-center py-3">
                        </li>
                        <li class="flex items-center py-3">
                            <span>Member since</span>
                            <span class="ml-auto">Nov 07, 2016</span>
                        </li>
                    </ul>
                </div>
                <div class="my-4"></div>
            </div>
            <div class="w-full md:w-9/12 mx-2 h-64">
                <About :doctor="doctor" />

                <div class="my-4"></div>

                <!-- Experience and education -->
                <div class="bg-white p-3 shadow-sm rounded-sm">

                    <div class="grid grid-cols-2">
                        <Experience/>
                        <Booking/>
                    </div>
                    <!-- End of Experience and education grid -->
                </div>
                <!-- End of profile tab -->
            </div>
        </div>
    </div>

</template>

<script>
import Booking from '../components/Booking';
import About from "../components/DoctorPage/About";
import Experience from "../components/DoctorPage/Experience";
export default {
    name: "SingleDoctorPage",
    components: {Booking,About,Experience},
    data() {
      return {
          doctor: null
      }
    },
    created() {
        const id = this.$route.params.id;
        this.$store.dispatch("getSingleDoctor", id).finally(()=> { this.doctor = this.$store.state.doctor })

    },
}
</script>

<style scoped>

</style>
