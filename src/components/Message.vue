<template>
    <div class="message-class">
        <article class="message" v-show="isVisible">
            <div class="message-header">
                <p>{{ title }}</p>
                <button class="delete" @click="isVisible = false"></button>
            </div>
            <div class="message-body">
                {{ shortenBody }}
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

        computed : {
            shortenBody: function() {
                return this.body.slice(10)
            }

        }

    }

</script>

<style>
   .message-class { padding-top: 20px; }
</style>



