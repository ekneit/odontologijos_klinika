<template>
    <div class="container mx-auto px-4 h-full">
        <div class="flex content-center items-center justify-center h-full">
            <div class="w-full lg:w-4/12 px-4">
                <div class="relative flex flex-col min-w-0 break-words w-full mb-6 flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form class="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
                        <!-- @csrf -->
                        <div
                            class="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4"
                        >
                            Register
                        </div>
                        <div class="mb-4">
                            <label
                                class="block text-gray-700 text-sm font-normal mb-2"
                                for="name"
                            >
                                Name
                            </label>
                            <span class="w-full text-red-500 text-sm" v-if="errors.name">{{errors.name[0]}}</span>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="name"
                                v-model="form.name"
                                type="text"
                                required
                                autofocus
                                placeholder="Name"
                            />
                        </div>
                        <div class="mb-4">
                            <label
                                class="block text-gray-700 text-sm font-normal mb-2"
                                for="email"
                            >
                                Email
                            </label>
                            <span class="w-full text-red-500 text-sm" v-if="errors.email">{{errors.email[0]}}</span>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="email"
                                v-model="form.email"
                                type="email"
                                required
                                autofocus
                                placeholder="Email"
                            />
                        </div>
                        <div class="mb-4">
                            <label
                                class="block text-gray-700 text-sm font-normal mb-2"
                                for="password"
                            >
                                Password
                            </label>
                            <span class="w-full text-red-500 text-sm" v-if="errors.password">{{errors.password[0]}}</span>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                v-model="form.password"
                                type="password"
                                placeholder="Password"
                                name="password"
                                required
                                autocomplete="current-password"
                            />
                        </div>
                        <div class="mb-4">
                            <label
                                class="block text-gray-700 text-sm font-normal mb-2"
                                for="confirm_password"
                            >
                                Confirm password
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                v-model="form.password_confirmation"
                                type="password"
                                placeholder="Password"
                                name="confirm_password"
                                required
                                autocomplete="current-password"
                            />
                        </div>
                        <div class="flex items-center justify-between">
                            <button @click.prevent="registerUser"
                                    class="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700"
                                    type="submit">Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Register",
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            },
            errors: []
        }
    },
    methods: {
        registerUser() {
            this.$store.dispatch("userRegister", this.form)
                .then(() => this.$router.push({name: "Dashboard"}))
                .catch((error) => this.errors = error.response.data.errors);
        }
    }
}
</script>

<style scoped>

</style>
