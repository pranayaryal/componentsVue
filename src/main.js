import Vue from 'vue'
// import App from './App.vue'
import routes from './routes'


const app = new Vue({
    el: '#app',
    data: {
        currentRoute: window.location.pathname
    },

    mounted() {
        console.log(this.$components)
    },


    computed: {
        ViewComponent()
        {
            const matchingView = routes[this.currentRoute]
            return matchingView
                ? require('./pages/' + matchingView + '.vue')
                : require('./pages/404.vue')
        }
    },

    render: h => h(this.ViewComponent)
});

window.addEventListener('popstate', () => {
    app.currentRoute = window.location.pathname
})

