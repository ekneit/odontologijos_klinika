<template>
    <div class="container mx-auto mt-20">
        <div class="flex flex-wrap -mx-4">
            <DoctorCard v-for="(doctor, key) in allDoctors" :key="key" :doctor="doctor"/>
        </div>
    </div>
</template>

<script>
import DoctorCard from "../components/Cards/DoctorCard";

export default {
    name: "Doctors",
    components: {
        DoctorCard
    },
    computed: {
        allDoctors() {
            return this.$store.state.doctors;
        },
    },
    created() {
        this.$store.dispatch("getAllDoctors");
    },
}
</script>

<style scoped>

</style>
