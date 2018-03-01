<template>
    <div>
        <nav2></nav2>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
    import Nav2 from './components/Nav2.vue'
    export default {

        name: 'app',

        components: {
            Nav2,
        },




    }
</script>

<style scoped>
    @import "~bootstrap/dist/css/bootstrap.css";
</style>