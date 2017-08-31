<template>
    <div class="box">
        <article class="media">
            <div class="media-left">
                <figure class="image is-64x64">
                    <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image">
                </figure>
            </div>
            <div class="media-content">
                <div class="content">
                        <p>
                            <strong>{{ capitalizeSecond }}</strong>
                            <small>@pranayaryal</small>
                            <small>31m</small>
                            <br>
                            I am excited to meet you  {{ capitalizeSecond }}
                        </p>

                </div>
                <nav class="level is-mobile">
                    <div class="level-left">
                        <a class="level-item">
                            <span class="icon is-small"><i class="fa fa-reply"></i></span>
                        </a>
                        <a class="level-item">
                            <span class="icon is-small"><i class="fa fa-retweet"></i></span>
                        </a>
                        <a class="level-item">
                            <span class="icon is-small"><i class="fa fa-heart"></i></span>
                        </a>
                    </div>
                </nav>
            </div>
        </article>
    </div>
</template>

<script>

    export default {
        created(){
            console.log('box awas created');
        },

        props: {
            name: ''
        },

        data(){
            return {
               capitalizeFirst : this.name.charAt(0).toUpperCase() + this.name.slice(1)
            }
        },

        computed: {
            capitalizeSecond: function() {
                return this.name.charAt(0).toUpperCase() + this.name.slice(1)
            }
        }

    };

</script>

<style>

</style>
