<template>
    <div>
        <NavBar/>
        <router-view></router-view>
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
