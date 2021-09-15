<template>
    <tr class="text-gray-700">
        <td class="px-4 py-3 border">
            <div class="flex items-center text-sm">
                <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                    <img class="object-cover w-full h-full rounded-full"
                         src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                         alt="" loading="lazy"/>
                    <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                    <p class="font-semibold text-black">{{ doctor.name }}</p>
                    <p class="text-xs text-gray-600">{{ doctor.department }}</p>
                </div>
            </div>
        </td>
        <td class="px-4 py-3 text-ms font-semibold border">{{ doctor.email }}</td>
        <td class="px-4 py-3 text-xs border">
            <span
                class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> {{ doctor.phone_number }} </span>
        </td>
        <td class="px-4 py-3 text-sm border">
            <button
                @click="editDoctor(doctor.id)"
                class="bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black ">
                Edit
            </button>
            <button
                @click="deliteDoctor(doctor.id, index)"
                class="bg-red-600 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black ">
                Delete
            </button>
        </td>
    </tr>
</template>

<script>
export default {
    name: "TableCardSingleRow",
    props: ['doctor','index'],
    methods: {
        deliteDoctor(id,index) {
            this.$emit("deleteDoctor", id,index);
        },
        editDoctor(id) {
            this.$router.push('/admin/doctors/edit/' + id)
        }

    }
}
</script>

<style scoped>

</style>
