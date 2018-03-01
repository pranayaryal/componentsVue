<template>
    <div class="navline">
        <nav>
            <ul>
                <!--<li><a href="/" class="nav-list-item">Your Name</a></li>-->
                <!--<li><a href="/about" class="nav-list-item">About</a></li>-->
                <!--<li><a href="/contact" class="nav-list-item">Contact</a></li>-->

                <!--<li><a href="/blog" class="nav-list-item">Blog</a></li>-->

                <router-link tag="li" to="/">
                    <a>Home</a>
                </router-link>
                <router-link tag="li" to="/contact">
                    <a>Contact</a>
                </router-link>

                <router-link tag="li" to="/about">
                    <a>About</a>
                </router-link>
                <router-link tag="li" to="/blog">
                    <a>Blog</a>
                </router-link>
                <!--<li>-->
                <!--<router-link to="/buy">Buy</router-link>-->
                <!--</li>-->
                <router-link tag="li" to="/buy">
                    <a>Buy</a>
                </router-link>
            </ul>
        </nav>
    </div>
</template>
<script>

    export default {
        name: 'app',

    }

</script>

<style scoped>
    li.router-link-active a {

        color: #f66;
    }

    a.router-link-active {
        color: #f66;
    }
</style>


