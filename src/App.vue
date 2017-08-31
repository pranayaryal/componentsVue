<template>
    <div id="app">
        <banner></banner>
    </div>
</template>

<script>

    import Tabs from './components/Tabs.vue';
    import Tab from './components/Tab.vue';
    import Modal from './components/Modal.vue';
    import Message from './components/Message.vue';
    import Coupon from './components/Coupon.vue';
    import Visualize from './components/Visualize.vue';
    import Columns from './components/Columns.vue';
    import Column from './components/Column.vue';
    import Box from './components/Box.vue';
    import Banner from './components/Banner.vue';


    export default {
        name: 'app',
        components: {Tabs, Tab, Modal, Message, Coupon, Visualize, Columns, Column, Box, Banner},

        data(){
            return {
                showModal: false,
                message_title: 'Message Title'
            }
        },

        methods: {
            couponApplied(){
                alert('coupon was applied');
            },


        }


    }
</script>


<style>
    /*@import "../node_modules/bulma/css/bulma.css";*/
</style>
