<template>
    <div>
        <navigation></navigation>
        <banner></banner>
        <boxes></boxes>
    </div>
</template>
<script>

    import Navigation from '../components/Navigation.vue'
    import Banner from '../components/Banner.vue'
    import Boxes from '../components/Boxes.vue'

    export default{
        name: 'app',
        components: {
            Navigation,
            Banner,
            Boxes
        }
    }

</script>
<style>

</style>