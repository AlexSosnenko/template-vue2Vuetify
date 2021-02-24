import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'main', auth: true },
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/port',
    name: 'Port',
    meta: { layout: 'main', auth: true },
    component: () => import('@/views/Port.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'empty', auth: false },
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/404',
    name: '404',
    meta: { layout: 'empty', auth: false },
    component: () => import('@/views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// Защита роутов...
router.beforeEach((to, from, next) => {
  if (!to.meta.layout) {
    next('/404')
    return
  }
  const requireAuth = to.meta.auth
  if (requireAuth && store.getters['isAuthenticated']) {
    next()
  } else if (requireAuth && !store.getters['isAuthenticated']) {
    next('/login')
  } else {
    next()
  }
})

export default router
