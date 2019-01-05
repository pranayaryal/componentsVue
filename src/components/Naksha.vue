<template>
    <div class="container">
        <figure class="p-5">
            <img :src="src" class="img-rounded img-responsive"/>
            <figurecaption class="figure-caption">
                <slot></slot>
            </figurecaption>
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
