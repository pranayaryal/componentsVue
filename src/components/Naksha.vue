<template>
    <div class="container">
        <figure class="p-5">
            <img :src="src" class="img-fluid rounded figure-img"/>
            <figcaption class="figure-caption">
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
