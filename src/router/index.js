import Vue from 'vue'
import VueRouter from 'vue-router'

// Componentes
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'

// Instalaciones
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Login
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '*',
            component: Login
        }
    ]
})