import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import { useGlobalStore } from '@/stores/global'

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
            requiresAuth: true,
          },
        },
        {
          path: 'fx-conversion',
          name: 'FX Conversion',
          component: () => import('../views/FxConversionView.vue'),
          meta: {
            title: 'Maplerad - FX Conversion',
            requiresAuth: true,
          },
        },
        {
          path: 'get-started',
          name: 'Get Started',
          component: () => import('../views/DashboardView.vue'),
          meta: {
            title: 'Maplerad - Get Started',
            requiresAuth: true,
          },
        },
        {
          path: 'cash',
          name: 'Cash',
          component: () => import('../views/DashboardView.vue'),
          meta: {
            title: 'Maplerad - Cash',
            requiresAuth: true,
          },
        },
        {
          path: 'card',
          name: 'Card',
          component: () => import('../views/DashboardView.vue'),
          meta: {
            title: 'Maplerad - Card',
            requiresAuth: true,
          },
        },
        {
          path: 'customers',
          name: 'Customers',
          component: () => import('../views/DashboardView.vue'),
          meta: {
            title: 'Maplerad - Customers',
            requiresAuth: true,
          },
        },
        {
          path: 'send-invite',
          name: 'Invite People',
          component: () => import('../views/DashboardView.vue'),
          meta: {
            title: 'Maplerad - Invite People',
            requiresAuth: true,
          },
        },
      ],
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((route) => route.meta.requiresAuth)) {
    const global = useGlobalStore()
    if (global.authUser) {
      next()
    } else {
      next('/')
    }
  } else {
    next()
  }
})

export default router

