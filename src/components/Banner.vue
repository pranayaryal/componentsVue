<template>
    <div>
        <div class="banner">
            <p class="banner-text">Enter Text Here</p>
        </div>
    </div>
</template>

<script>

    export default {
        mounted(){
            console.log('the banner component has been mounted');
        },

        created(){
            console.log('the component has been created');
        },

        data(){
            return {
                showModal: false
            }
        },

        methods: {}
    }

</script>

<style></style>
