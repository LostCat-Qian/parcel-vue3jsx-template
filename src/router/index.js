import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  // {
  //   path: '/',
  //   redirect: '/home'
  // },
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: () => import('../views/Home')
  // }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
