import { createWebHistory, createRouter } from 'vue-router'
import { authLogin } from '../stores'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../layouts/homePage.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../layouts/loginPage.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../layouts/dashboardPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const store = authLogin();

  if(to.name !== 'login' && !store.isAuth) next({ name: 'login' })
  if(to.name === 'login' && store.isAuth) next({ name: 'home' })

  else next()
})

export default router