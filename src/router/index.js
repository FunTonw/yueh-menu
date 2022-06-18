import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'pospage',
    component: () => import('../views/PosPage.vue')
  },
  {
    path: '/numberpage',
    name: 'numberpage',
    component: () => import('../views/NumberPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
