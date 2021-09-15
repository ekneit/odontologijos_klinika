<template>
    <div class="px-4 md:ml-64 md:px-10 mx-auto w-full -m-24 md:pt-44 pt-12">
        <div class="flex flex-wrap">
            <div class="w-full lg:w-8/12 px-4">
                <AddDoctorForm/>
            </div>
        </div>
    </div>
</template>

<script>
import AddDoctorForm from "../../components/Forms/AddDoctorForm";

export default {
    name: "AddDoctor",
    components: {AddDoctorForm}
}
</script>

<style scoped>

</style>
