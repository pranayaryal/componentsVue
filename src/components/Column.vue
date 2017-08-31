<template>
    <div class="column">
        <div class="notification is-primary has-text-centered">
            {{ capitalizeFirst }}
        </div>
    </div>


</template>


<script>
    export default{
        created(){
            console.log('Column was created');
        },

        props: {
            name: ''
        },

        data(){
            return{
                capitalizeFirst : this.name.charAt(0).toUpperCase() + this.name.slice(1)
            }
        }


    }

</script>

<style>

</style>

