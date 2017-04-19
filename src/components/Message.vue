<template>
    <div class="message-class">
        <article class="message" v-show="isVisible">
            <div class="message-header">
                <p>{{ title }}</p>
                <button class="delete" @click="isVisible = false"></button>
            </div>
            <div class="message-body">
                {{ body }}
            </div>
        </article>

    </div>

</template>


<script>

    export default{
        mounted(){
            console.log('message component has been mounted');
        },

        props: ['title', 'body'],

        data(){
            return {
                isVisible: true
            };
        },

        methods: {
            hideModal(){
                this.isVisible = false;
            }
        }

    }

</script>

<style>
   .message-class { padding-top: 20px; }
</style>



