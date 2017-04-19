<template>
    <div>
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
               <div class="box">
                   <slot></slot>
               </div>
            </div>
            <button class="modal-close" @click="$emit('close')"></button>
        </div>
    </div>
</template>

<script>

    export default {
        mounted(){
            console.log('the component has been mounted');
        },

        created(){


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