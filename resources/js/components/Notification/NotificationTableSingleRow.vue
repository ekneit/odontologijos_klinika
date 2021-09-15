<template>
    <tr class="text-gray-700">
        <td class="px-2 py-2 border">
            <div class="flex items-center text-sm">
                <div>
                    <p class="font-semibold text-black">{{ appiontment.name }}</p>
                    <p class="text-xs text-gray-600"></p>
                </div>
            </div>
        </td>
        <td class="px-2 py-2 text-ms text-sm border">{{ appiontment.email }}</td>
        <td class="px-2 py-2 text-xs border">
            <span
                class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                {{appiontment.phone_number}} </span>
        </td>
        <td class="px-2 py-2 text-ms text-sm border">
            <p class="font-semibold text-black">
                <router-link :to="{ path: '/doctor/' + appiontment.doctor_id }" class="hover:text-gray-500">
                    {{ appiontment.doctor_name }}
                </router-link>
            </p>
        </td>
        <td class="px-2 py-2 text-ms text-sm border"><p class="font-semibold text-black">{{ appiontment.date }}</p></td>
        <td class="px-1 py-2 text-sm border">
            <button
                v-if="!appiontment.status"
                @click="approveAppointments(appiontment.id)"
                class="bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black ">
                Approve
            </button>
            <button
                @click="deleteAppointments(appiontment.id, index)"
                class="bg-red-600 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black ">
                Delete
            </button>
        </td>
    </tr>
</template>

<script>
export default {
    name: "NotificationTableSingleRow",
    props: ['appiontment', 'index'],
    methods: {
        deleteAppointments(id, index) {
            this.$emit("deleteAppointments", id, index);
        },
        approveAppointments(id) {
            this.$store.dispatch("approveAppointments", id)
                .then((res) => this.appiontment.status = 1)
                .catch((error) => this.errors = error.response.data.errors);
        }
    }
}
</script>

<style scoped>

</style>
