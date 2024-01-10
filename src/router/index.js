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
        title: 'Maplerad - Home',
      },
    },
    {
      path: '/otp-verification',
      name: 'Verify',
      component: () => import('../views/OtpView.vue'),
      meta: {
        title: 'Maplerad - Otp Verification',
      },
    },
    {
      path: '/dashboard',
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('../views/DashboardView.vue'),
          meta: {
            title: 'Maplerad - Home',
          },
        },
        {
          path: 'fx-conversion',
          name: 'FX Conversion',
          component: () => import('../views/FxConversionView.vue'),
          meta: {
            title: 'Maplerad - FX Conversion',
          },
        },
        {
          path: 'get-started',
          name: 'Get Started',
          component: () => import('../views/DashboardView.vue'),
          meta: {
            title: 'Maplerad - Get Started',
          },
        },
        {
          path: 'cash',
          name: 'Cash',
          component: () => import('../views/DashboardView.vue'),
          meta: {
            title: 'Maplerad - Cash',
          },
        },
        {
          path: 'card',
          name: 'Card',
          component: () => import('../views/DashboardView.vue'),
          meta: {
            title: 'Maplerad - Card',
          },
        },
        {
          path: 'customers',
          name: 'Customers',
          component: () => import('../views/DashboardView.vue'),
          meta: {
            title: 'Maplerad - Customers',
          },
        },
        {
          path: 'send-invite',
          name: 'Invite People',
          component: () => import('../views/DashboardView.vue'),
          meta: {
            title: 'Maplerad - Invite People',
          },
        },
      ],
    },
  ],
})

export default router

