<template>
    <div class="container mx-auto pt-8">
        <div class="flex flex-wrap -mx-4">
            <DoctorCard/>
            <DoctorCard/>
        </div>
    </div>
</template>

<script>
import DoctorCard from "../components/Cards/DoctorCard";

export default {
    name: "Doctors",
    components: {
        DoctorCard
    }
}
</script>

<style scoped>

</style>
