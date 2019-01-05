<template>
    <div class="container">
        <figure class="p-5">
<<<<<<< HEAD
            <img :src="src" class="img-rounded img-responsive"/>
            <figurecaption class="figure-caption">
=======
            <img :src="src" class="img-fluid rounded figure-img"/>
            <figcaption class="figure-caption">
>>>>>>> ac73c0add8bef4b61ac2b3a342fa240b73764a52
                <slot></slot>
            </figcaption>
        </figure>
    </div>
</template>

<script>
    export default{
        props: [ 'src']
    }
</script>

<style scoped>

    @import '../../node_modules/bootstrap/dist/css/bootstrap.css';



</style>
