import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import Contact from '../pages/Contact.vue'
import About from '../pages/About.vue'
import Buy from '../pages/Buy.vue'
import Blog from '../pages/Blog.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },

        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/buy',
            name: 'buy',
            component: Buy
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog
        }
    ]
})
