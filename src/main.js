import Vue from 'vue'
import App from './App.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Blog from './pages/Blog.vue'
import Contact from './pages/Contact.vue'
import NotFound from './pages/404.vue'


const routes = {
    '/' : Home,
    '/about': About,
    '/contact': Contact,
    '/blog': Blog
};

const app = new Vue({
    el: '#app',

    data: {
        currentRoute: window.location.pathname
    },

    computed: {
        ViewComponent(){
            return routes[this.currentRoute] || NotFound
        }
    },

    render(h){
        return h(this.ViewComponent)
    }

});


