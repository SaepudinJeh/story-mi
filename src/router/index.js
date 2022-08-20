import { createWebHistory, createRouter } from 'vue-router'

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
  },
  {
    path: '/edit-story',
    name: 'edit-story',
    component: () => import('../layouts/editStoryPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuth = localStorage.getItem('access_token')

  if(to.name === 'login' && isAuth) next({ name: 'home' })
  else if(to.name === 'dashboard' && !isAuth) next({ name: 'login' })

  else next()
})

export default router