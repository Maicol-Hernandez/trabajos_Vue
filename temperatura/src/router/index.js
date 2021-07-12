import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Reportes from '../components/Reportes.vue'
import Grid from '../components/Grid.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Home from '../views/Home.vue'
import VuetifyAxios from '../components/Vuetify-axios.vue'



Vue.use(VueRouter)

const routes = [
  { path: '/Login', name: 'Login', component: Login },
  { path: '/', name: 'Home', component: Home },
  { path: '/Reportes', name: 'Reportes', component: Reportes },
  { path: '/api-calendario', component: VuetifyAxios },
  { path: '/tablas', component: Grid },
  { path: '/helloworld', component: HelloWorld },
  { path: '/home', component: Home },
  
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router