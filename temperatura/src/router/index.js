import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Reportes from '../components/Reportes.vue'
import Grid from '../components/Grid.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Home from '../views/Home.vue'
import Calendario from '../views/Calendario.vue'
import Propiedades from '../views/Propiedades.vue'
import ListaTareas from '../views/ListaTareas.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/Login', name: 'Login', component: Login },
  { path: '/', name: 'Home', component: Home },
  { path: '/Reportes', name: 'Reportes', component: Reportes },
  { path: '/api-calendario', component: Calendario },
  { path: '/tablas', component: Grid },
  { path: '/helloworld', component: HelloWorld },
  { path: '/home', component: Home },
  { path: '/propiedades', component: Propiedades },
  { path: '/listadetareas', name: 'ListaTareas', component: ListaTareas }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router