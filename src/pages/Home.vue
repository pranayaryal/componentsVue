<template>
    <div>
        <navigation></navigation>
        <banner></banner>
        <boxes></boxes>
    </div>
</template>
<script>

    import Navigation from '../components/Navigation.vue'
    import Banner from '../components/Hero.vue'
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
