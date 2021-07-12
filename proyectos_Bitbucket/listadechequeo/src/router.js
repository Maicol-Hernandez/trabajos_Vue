import Vue from 'vue'
import Router from 'vue-router'

/**
 * Rutas Usuario
 */
import Infouser from './components/usuario/Infouser';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      component: Infouser
    },
    
        {
          path: '/Info-User',
          component: Infouser
        },
  ]
});

/***
 * Proteger Rutas
 */
router.beforeEach((to, from, next) => {
  let rol = localStorage.getItem('rol');
  let autorizacion = to.matched.some(record => record.meta.autentificado)
  if (autorizacion && !rol) {
    next('/');
  } else if (!autorizacion && rol) {
    next();
  } else {
    next();
  }
});
export default (router);
