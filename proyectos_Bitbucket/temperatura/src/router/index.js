import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'

import Reportes from '../components/Reportes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Reportes',
    component: Reportes
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router