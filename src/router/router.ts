import { createRouter, createWebHistory } from 'vue-router'




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
    component: () => import('@/views/MainMap.vue')
  },
  {
    path: '/post/:id',
    name: 'Post {{ $route.params.id }}',
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
    component: () => import(/* webpackChunkName: "about" */ '@/views/Profile.vue')
  }

]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
