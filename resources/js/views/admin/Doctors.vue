<template>
    <div class="px-4 md:ml-64 md:px-10 mx-auto w-full -m-24 md:pt-44 pt-12">
        <div class="flex flex-wrap">
            <div class="w-full lg:w-8/12 px-4">
                <h6 class="text-blueGray-700 text-xl font-bold">All Doctors</h6>
                <TableCard :allDoctors="allDoctors"/>
            </div>
        </div>
    </div>
</template>

<script>
import TableCard from "../../components/Cards/TableCard";
export default {
    name: "Doctors",
    components: {TableCard},
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
