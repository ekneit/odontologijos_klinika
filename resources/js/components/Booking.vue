<template>
    <div>
        <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
            <span class="tracking-wide">Book Time</span>
        </div>
        <ul class="list-inside space-y-2">
            <div class="inline-flex text-lg border rounded-md shadow-lg p-2">
                <select name="" class="px-2 outline-none appearance-none bg-transparent">
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="02">03</option>
                </select>
                <span class="px-2">:</span>
                <select name="" class="px-2 outline-none appearance-none bg-transparent">
                    <option value="00">00</option>
                    <option value="01">01</option>
                </select>
                <select name="" class="px-2 outline-none appearance-none bg-transparent">
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                </select>
            </div>
            <button class="mt-3  bg-green-500 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Book
            </button>
        </ul>
    </div>
</template>

<script>
export default {
    name: "booking"
}
</script>

<style scoped>

</style>
