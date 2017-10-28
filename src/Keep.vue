<template>
    <div id="app">
        <tabs>
            <tab name="My Pictures" :selected="true">
            </tab>
            <tab name="Choose">
                <columns>
                    <column name="pictures"></column>
                    <column name="about"></column>
                    <column name="pictures"></column>
                    <column name="portfolio"></column>
                    <column name="hobbies"></column>
                </columns>
            </tab>
            <tab name="Snippets">
                <box name = "pranay"></box>
                <box name = "pratibha"></box>
                <message title="Title" body="Lorem ipsum dolor sit amet this is so nice"></message>
                <message title="New" body="Lorem ipsum dolor sit amet this is so nice"></message>
            </tab>
            <!--<button @click="showModal= true">Show Modal</button>-->
            <!--<coupon @applied="couponApplied"></coupon>-->
            <!--<visualize>Bar Chart using d3</visualize>-->

        </tabs>

        <!--<modal v-if="showModal" @close="showModal = false">-->
        <!--<p>Welcome to the modal</p>-->
        <!--</modal>-->
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
    import Banner from './components/Hero.vue';


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
