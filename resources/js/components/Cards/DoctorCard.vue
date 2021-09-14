<template>
    <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
        <div href="" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
            <div class="relative pb-48 overflow-hidden">
                <img class="absolute inset-0 h-full w-full object-cover"
                     src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                     alt="">
            </div>
            <div class="p-4">
                <span
                    class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Doctor</span>
                <h2 class="mt-2 mb-2  font-bold">{{ doctor.name }}</h2>
                <p class="text-sm">{{ doctor.description }}</p>
                <button @click="viewDoctor" class="mt-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    View Doctor
                </button>
            </div>
            <div class="p-4 border-t border-b text-xs text-gray-700">
                <span class="flex items-center">
            <i class="far fa-address-card fa-fw text-gray-900 mr-2"></i>{{ doctor.department }}
          </span>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "DoctorCard",
    props: ['doctor'],
    methods: {
        viewDoctor() {
            this.$router.push('/doctor/' + this.doctor.id)
        }
    }
}
</script>

<style scoped>

</style>
