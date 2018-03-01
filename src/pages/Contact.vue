<template>
    <div>
        <!--<navigation></navigation>-->
        <br><br>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <p class="lead"><a href="https://twitter.com/pranayaryal" target="_blank">@pranayaryal</a></p>
                    <p class="lead">drpranayaryal@gmail.com</p>
                    <p class="lead"><a href="https://www.linkedin.com/in/pranayaryal" target="_blank">linkedin</a></p>
                </div>
            </div>
            <div class="row">
                <collapsiblenav></collapsiblenav>
            </div>
        </div>

    </div>
</template>

<script>
    import Navigation from '../components/Navigation.vue'
    import Collapsiblenav from '../components/Collapsiblenav.vue'

    export default{
        name: 'app',
        components: {
            Navigation,
            Collapsiblenav
        }
    }
</script>

<style scoped>
    @import '../../node_modules/bootstrap/dist/css/bootstrap.css';
    .lead {
        font-family: 'Work Sans', sans-serif;
    }
</style>