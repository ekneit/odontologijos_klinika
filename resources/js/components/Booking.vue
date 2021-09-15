<template>
    <div>
        <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
            <span class="tracking-wide">Book Time</span>
        </div>
        <ul class="list-inside space-y-2">
            <v-date-picker v-model="date" mode="dateTime" :min-date='new Date()' is24hr>
                <template v-slot="{ inputValue, inputEvents }">
                    <input
                        class="px-2 py-1 border rounded focus:outline-none focus:border-blue-300"
                        :value="inputValue"
                        v-on="inputEvents"
                    />
                </template>
            </v-date-picker>
        </ul>
        <button class="mt-3  bg-green-500 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Book
        </button>
    </div>
</template>

<script>
export default {
    name: "booking",
    data() {
        return {
            date: new Date(),
        }
    },
}
</script>

<style scoped>

</style>
