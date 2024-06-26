import { createRouter, createWebHistory } from 'vue-router'
//@ts-ignore
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/data-privacy',
      name: 'data-privacy',

      component: () => import('../views/DataPrivacyView.vue')
    },
    {
      path: '/imprint',
      name: 'imprint',

      component: () => import('../views/ImprintView.vue')
    }
  ]
})

export default router
