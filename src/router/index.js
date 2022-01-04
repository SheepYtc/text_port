import Vue from 'vue'
import VueRouter from 'vue-router'
import calendar_t from '../components/calendar_t.vue'

Vue.use(VueRouter)

const routes = [

    {
        path: "/",
        redirect: "/calendar_t"
    },
    {
        path: '/calendar_t',
        name: 'calendar_t',
        component: () =>
            import ('../components/calendar_t.vue'),
    },

    {
        path: '/joke',
        name: 'joke',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../components/joke.vue')
    },
    {
        path: '/weather',
        name: 'weather',
        component: () =>
            import ('../components/weather.vue'),
    },
    {
        path: '/news',
        name: 'news',
        component: () =>
            import ('../components/news.vue'),
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router