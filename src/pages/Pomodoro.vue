<template>
    <div>
       <!--<navigation></navigation>-->
        <timer></timer>

    </div>
</template>

<script>
    import Navigation from '../components/Navigation.vue'
    import Timer from '../components/Timer.vue'

    export default{
        name: 'app',
        components: {
           Navigation,
            Timer
        }
    }

</script>

<style scoped>
    @import "~bootstrap/dist/css/bootstrap.css";
</style>