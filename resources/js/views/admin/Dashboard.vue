<template>
    <div class="px-4 md:ml-64 md:px-10 mx-auto w-full -m-24 md:pt-44 pt-12">
        <div class="flex flex-wrap">
            <div class="w-full lg:w-8/12 px-4">
                <h6 class="text-blueGray-700 text-xl font-bold">Notifications</h6>
                <NotificationsTableCard/>
            </div>
        </div>
    </div>
</template>

<script>
import NotificationsTableCard from "../../components/Notification/NotificationsTableCard";
export default {
    name: "Dashboard",
    components: { NotificationsTableCard },
    created() {
        this.$store.dispatch("getAppointments");
    },
}
</script>

<style scoped>

</style>
