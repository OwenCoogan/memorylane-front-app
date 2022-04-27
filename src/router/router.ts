import { createRouter, createWebHistory } from 'vue-router'
import { useUsersStore } from '../stores/users'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomePage.vue'),
  },
  {
    path: '/signin',
    name: 'Sign-in',
    component: () => import('@/views/Signin.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/views/Admin.vue')
  },
  {
    path: '/map',
    name: 'Map',
    meta: { requiresAuth: true },
    component: () => import('@/views/MainMap.vue')
  },
  {
    path: '/post/:id',
    name: 'Post {{ $route.params.id }}',
    meta: { requiresAuth: true },
    component: () => import('@/views/PostPage.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Signin.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Register.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "about" */ '@/views/Profile.vue')
  }

]


const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, from) => {
  const userStore = useUsersStore()
  async function checkAuth() {
    await userStore.checkUser()
    .then(res=> {
      if (to.matched.some(record => record.meta.requiresAuth)) {
        if (userStore.getAuth?.isAuthenticated === false) {
          router.push('/login')
        }
      }
    })
  }
  checkAuth()
})

export default router
