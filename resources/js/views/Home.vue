<template>
    <div>
        <section
            class="header relative pt-16 items-center flex h-screen max-h-860-px"
        >
            <div class="container mx-auto items-center flex flex-wrap">
                <div class="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                    <div class="pt-32 sm:pt-0">
                        <h2 class="font-semibold text-4xl text-blueGray-600">
                            Dental treatment services
                        </h2>
                        <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                            Our dental clinic offers all types of dental treatment. With the help of modern digital
                            technologies we offer therapeutic and endodontic treatment, dental implantations, prosthetic
                            dental work, aesthetic fillings, orthodontic treatment, professional oral hygiene and teeth
                            whitening, treatment of children’s teeth and preventive care.
                        </p>
                        <div class="mt-12">
                            <router-link to="/dashboard"
                                         class="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-green-500 active:bg-emerald-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                            >
                                Find Doctor
                            </router-link>
                            <router-link to="/auth"
                                         class="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-500 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                            >
                                Login
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <img
                class="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
                alt="hero-image"
                :src="heroImage"
            />
        </section>
    </div>
</template>

<script>
import heroImage from "../assets/images/hero-image.jpg";

export default {
    name: "Home",
    data() {
        return {
            heroImage
        }
    }
}
</script>

