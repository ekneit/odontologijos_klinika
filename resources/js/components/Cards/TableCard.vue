<template>
    <section class="container mx-auto p-6 font-mono">
        <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
            <div class="w-full overflow-x-auto">
                <table class="w-full">
                    <thead>
                    <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                        <th class="px-4 py-3">Name</th>
                        <th class="px-4 py-3">Email</th>
                        <th class="px-4 py-3">Phone Number</th>
                        <th class="px-4 py-3">Options</th>
                    </tr>
                    </thead>
                    <tbody class="bg-white">
                    <TableCardSingleRow v-for="(doctor, key) in allDoctors" :key="key" :index="key" :doctor="doctor"
                                        v-on:deleteDoctor="deleteDoctor"/>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>

<script>
import TableCardSingleRow from "./TableCardSingleRow";

export default {
    name: "TableCard",
    props: ['allDoctors'],
    components: {TableCardSingleRow},
    methods: {
        deleteDoctor(id, index) {
            this.allDoctors.splice(index, 1)
            this.$store.dispatch("deleteDoctor", id)
                .then((res) => console.log(res))
                .catch((error) => this.errors = error.response.data.errors);
        },

    }
}
</script>

<style scoped>

</style>
