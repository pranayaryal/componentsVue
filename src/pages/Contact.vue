<template>
    <div>
        <navigation></navigation>
        <br><br>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <p class="lead"><a href="https://twitter.com/pranayaryal">@pranayaryal</a></p>
                    <p class="lead">drpranayaryal@gmail.com</p>
                    <p class="lead"><a href="https://www.linkedin.com/in/pranayaryal">linkedin</a></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Navigation from '../components/Navigation.vue'

    export default{
        name: 'app',
        components: {
            Navigation
        }
    }
</script>

<style scoped>
    @import '../../node_modules/bootstrap/dist/css/bootstrap.css';

</style>