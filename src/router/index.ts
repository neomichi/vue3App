import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    meta: { role: 0,title:'главная',showInMenu:true  },
    path: '/',
    name: 'home',
    component: Home
  },
  {
    meta: { role: 0,title:'о нас',showInMenu:true  },
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    meta: { role: 0,title:'войти',showInMenu:true  },
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Auth" */ '../views/Auth.vue')
  },
  {
    meta: { role: 0,title:'Регистрация',showInMenu:false  },
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Auth" */ '../views/Auth.vue')
  },
  {
    meta: { role: 10,title:'user',showInMenu:true  },
    path: '/user',
    name: 'user',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Auth" */ '../views/UserProfile.vue')
  },
  {
    meta: { role: 30,title:'админ',showInMenu:false  },
    path: '/admin',
    name: 'admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Auth" */ '../views/Admin.vue')
  },

  {
    meta: { role: 0,title:'админ',showInMenu:false  },
    path: '/clubTest',
    name: 'clubTest',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Auth" */ '../views/ClubTest.vue')
  },


  
  {
    meta: {role: 0,title:'',showInMenu:false},
    path: '/suspensePage',
    name:'suspensePage',
    component:()=>import(/* webpackChunkName: "Auth" */ '../views/SuspensePage.vue') 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
