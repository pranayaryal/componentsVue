<template>
    <div>
        <navigation></navigation>
        <hero></hero>
        <br>
        <div class="row">
            <div class="col-md-2">
                <sidenav></sidenav>
            </div>

        </div>
        <br>

        <!--<boxes></boxes>-->
    </div>
</template>
<script>

    import Navigation from '../components/Navigation.vue'
    import Hero from '../components/Hero.vue'
    import Boxes from '../components/Boxes.vue'
    import Sidenav from '../components/Sidenav.vue'
    import Togglemenu from '../components/toggleMenu.vue'

    export default{
        name: 'app',
        components: {
            Navigation,
            Hero,
            Boxes,
            Sidenav,
            Togglemenu
        }
    }

</script>
