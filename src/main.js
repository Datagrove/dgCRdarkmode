import { createApp } from 'vue'
import App from './App.vue'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
// import Contact from '@/views/Contact.vue'
import Portfolio from '@/views/Internship.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'Home',
            component: Home,
            path: "/"
        },
        {
            name: 'About',
            component: About,
            path: "/about"
        },
        // {
        //     name: 'Contact',
        //     component: Contact,
        //     path: "/contact"
        // },
        {
            name: 'Internship',
            component: Portfolio,
            path: "/internship"
        }
    ]
})

createApp(App)
.use(router)
.mount('#app')
