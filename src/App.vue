<template>
    <div id="app">

        <!--<navigation></navigation>-->
        <!--<banner></banner>-->
        <!--<boxes></boxes>-->

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
    import Banner from './components/Banner.vue';
    import Navigation from './components/Navigation.vue';
    import Boxes from './components/Boxes.vue';
    import Sidenav from './components/Sidenav.vue';
    import Leg from './components/Leg.vue';
    import routes from './routes';


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
            Banner,
            Navigation,
            Boxes,
            Sidenav,
            Leg
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
</style>
