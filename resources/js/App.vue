<template>
    <div>
        <NavBar/>
<!--        <div class="container mx-auto py-2">-->
            <router-view></router-view>
<!--        </div>-->
    </div>
</template>

<script>
import NavBar from "./components/Navbars/Navbar";

export default {
    name: "App",
    components: {NavBar},
}
</script>

<style scoped>

</style>
