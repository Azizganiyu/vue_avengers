import Vue from 'vue'
import Router from 'vue-router'
import Avengers  from './components/Avengers.vue'
import About from './components/About.vue'  
import Welcome from './components/Welcome.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'avengers',
            component: Avengers
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/welcome/:name',
            name: 'Welcome',
            component: Welcome
        },
    ]
})