<template>
    <div id="app">

        <hero></hero>
        <boxes></boxes>

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
    import Media from './components/Media.vue';
    import Hero from './components/Hero.vue';
    import Navigation from './components/Navigation.vue';
    import Boxes from './components/Boxes.vue';
    import Sidenav from './components/Sidenav.vue';
    import Leg from './components/Leg.vue';
    import routes from './routes';
    import vlink from './components/VLink.vue';
    import Naksha from './components/Naksha.vue';


    export default {
        name: 'app',
        components: {
            Tabs,
            Tab,
            Modal,
            Message,
            Coupon,
            Visualize,
            Columns,
            Column,
            Media,
            Hero,
            Navigation,
            Boxes,
            Sidenav,
            Leg,
            vlink,
            Naksha
        },

        data(){
            return {
                showModal: false,
                message_title: 'Message Title',
                currentRoute: window.location.pathname
            }
        },


    }

</script>


<style>
    /*@import "../node_modules/bulma/css/bulma.css";*/
    @import '~bootstrap/dist/css/bootstrap.css';

</style>
