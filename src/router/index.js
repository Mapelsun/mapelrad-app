import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginView,
      meta: {
        title: 'Maplerad - Home'
      }
    },
    {
      path: '/otp-verification',
      name: 'verify',
      component: () => import('../views/OtpView.vue'),
      meta: {
        title: 'Maplerad - Otp Verification'
      }
    },
    {
      path: '/dashboard',
      name: 'home',
      component: () => import('../views/DashboardView.vue'),
      meta: {
        title: 'Maplerad - Home'
      }
    }
  ]
})

export default router