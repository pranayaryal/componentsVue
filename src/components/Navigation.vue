<template>
        <div class="navline">
            <nav>
                <ul>
                    <!--<li><a href="/" class="nav-list-item">Your Name</a></li>-->
                    <!--<li><a href="/about" class="nav-list-item">About</a></li>-->
                    <!--<li><a href="/contact" class="nav-list-item">Contact</a></li>-->
                    <!--<li><a href="/blog" class="nav-list-item">Blog</a></li>-->
                    <li><vlink href="/" class="nav-list-item">Home</vlink></li>
                    <li><vlink href="/about" class="nav-list-item">About</vlink></li>
                    <li><vlink href="/blog" class="nav-list-item">Blog</vlink></li>
                    <li><vlink href="/buy" class="nav-list-item">Buy</vlink></li>
                    <li><vlink href="/contact" class="nav-list-item">Contact</vlink></li>
                    <li><vlink href="/pomodoro" class="nav-list-item">Pomodoro</vlink></li>
                </ul>
            </nav>
        </div>
</template>
<script>

    import Vlink from '../components/VLink.vue'

    export default{
        name: 'app',
        components: {
           Vlink
        }
    }

</script>

<style>

</style>
