<template>
        <div
            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-2"
        >
            <div class="rounded-t bg-white mb-0 px-6 py-6">
                <div class="text-center flex justify-between">
                    <h6 class="text-blueGray-700 text-xl font-bold">Edit Doctor</h6>
                    <Alerts v-if="message" :message="message" />
                    <button
                            class="bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                            type="button"
                    >
                        Save
                    </button>
                </div>
            </div>
            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form>
                    <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                        Doctor Information
                    </h6>
                    <div class="flex flex-wrap">
                        <div class="w-full lg:w-6/12 px-4">
                            <div class="relative w-full mb-3">
                                <label
                                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Name
                                </label>
                                <span class="w-full text-red-500 text-sm" v-if="errors.name">{{ errors.name[0] }}</span>
                                <input
                                    type="text"
                                    name="name"
                                    v-model="form.name"
                                    class="border-2 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                />
                            </div>
                        </div>
                        <div class="w-full lg:w-6/12 px-4">
                            <div class="relative w-full mb-3">
                                <label
                                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Email address
                                </label>
                                <span class="w-full text-red-500 text-sm" v-if="errors.email">{{errors.email[0]}}</span>
                                <input
                                    type="email"
                                    name="email"
                                    v-model="form.email"
                                    class="border-2 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                />
                            </div>
                        </div>
                        <div class="w-full lg:w-6/12 px-4">
                            <div class="relative w-full mb-3">
                                <label
                                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Department
                                </label>
                                <span class="w-full text-red-500 text-sm" v-if="errors.department">{{errors.department[0]}}</span>
                                <input
                                    type="text"
                                    name="department"
                                    v-model="form.department"
                                    class="border-2 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                />
                            </div>
                        </div>
                        <div class="w-full lg:w-6/12 px-4">
                            <div class="relative w-full mb-3">
                                <label
                                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Phone Number
                                </label>
                                <span class="w-full text-red-500 text-sm" v-if="errors.phone_number">{{errors.phone_number[0]}}</span>
                                <input
                                    type="phonenumber"
                                    placeholder="86.."
                                    name="phone_number"
                                    v-model="form.phone_number"
                                    class="border-2 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                />
                            </div>
                        </div>
                    </div>

                    <hr class="mt-6 border-b-1 border-blueGray-300" />

                    <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                        Contact Information
                    </h6>
                    <div class="flex flex-wrap">
                        <div class="w-full lg:w-12/12 px-4">
                            <div class="relative w-full mb-3">
                                <label
                                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Address
                                </label>
                                <span class="w-full text-red-500 text-sm" v-if="errors.address">{{errors.address[0]}}</span>
                                <input
                                    type="text"
                                    name="address"
                                    v-model="form.address"
                                    class="border-2 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                />
                            </div>
                        </div>
                    </div>

                    <hr class="mt-6 border-b-1 border-blueGray-300" />

                    <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                        More Information
                    </h6>
                    <div class="flex flex-wrap">
                        <div class="w-full lg:w-12/12 px-4">
                            <div class="relative w-full mb-3">
                                <label
                                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Description
                                </label>
                                <span class="w-full text-red-500 text-sm" v-if="errors.description">{{errors.description[0]}}</span>
                                <textarea
                                    type="text"
                                    name="description"
                                    v-model="form.description"
                                    class="border-2 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    rows="4"
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
</template>

<script>
export default {
    name: "EditDoctorForm",
    data() {
        return {
            form: {
                name: '',
                email: '',
                department: '',
                phone_number: '',
                address: '',
                description: ''
            },
            errors: {},
            message: ''
        }
    },
    created() {
        const id = this.$route.params.id;
        console.log(id);
        const doctor = this.$store.getters.getDoctorByID(id);
        console.log(doctor);
    },
}
</script>

