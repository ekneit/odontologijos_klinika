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
                        <th class="px-4 py-3">Doctor</th>
                        <th class="px-4 py-3">Data</th>
                        <th class="px-4 py-3">Approve</th>
                    </tr>
                    </thead>
                    <tbody class="bg-white">
                    <NotificationTableSingleRow v-for="(appiontment, key) in allAppointments" :key="key" :index="key" :appiontment="appiontment"
                                                v-on:deleteAppointments="deleteAppointments"
                    />
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>

<script>
import NotificationTableSingleRow from "./NotificationTableSingleRow";
export default {
    name: "NotificationsTableCard",
    components: {NotificationTableSingleRow},
    computed: {
        allAppointments() {
            return this.$store.state.appiontments;
        },
    },
    methods: {
        deleteAppointments(id, index) {
            this.allAppointments.splice(index, 1)
            this.$store.dispatch("deleteAppointments", id)
                .then((res) => console.log(res))
                .catch((error) => this.errors = error.response.data.errors);
        }
    }
}
</script>

<style scoped>

</style>
