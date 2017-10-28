<template>
    <div>
        <navigation></navigation>
        <br><br>
        <cats></cats>
    </div>
</template>

<script>
    import Navigation from '../components/Navigation.vue'
    import Cats from '../components/Cats.vue'
    export default{
        name: 'app',
        components: {
            Navigation,
            Cats
        }
    }

</script>


