<template>
    <div class="columns">
        <slot></slot>
    </div>

</template>


<script>

    export default{
        data(){
            return {
                columns: []
            }
        },

        created(){
            this.columns = this.$children;
        }
    };

</script>

<style>

</style>