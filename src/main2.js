import Vue from 'vue'
import router from './router'
import App2 from './App2.vue'


new Vue({
    el: '#app',
    router,
    template: '<App2/>',
    components: { App2 }
});


