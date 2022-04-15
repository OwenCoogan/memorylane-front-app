import { createRouter, createWebHistory } from 'vue-router'

function RedirectUnregisteredUsers() {
    //router.push('/login')
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomePage.vue'),
  },
  {
    path: '/signin',
    name: 'Sign-in',
    component: () => import('../views/Signin.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/map',
    name: 'Map',
    component: () => import('../views/MainMap.vue'),
    beforeEnter: () => {
      RedirectUnregisteredUsers()
    },
  },
  {
    path: '/post/:id',
    name: 'Post {{ $route.params.id }}',
    component: () => import('../views/PostPage.vue'),
    beforeEnter: () => {
      RedirectUnregisteredUsers()
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Signin.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue'),
    beforeEnter: () => {
      RedirectUnregisteredUsers()
    },
  }

]


const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_URL),
  routes
})

export default router
