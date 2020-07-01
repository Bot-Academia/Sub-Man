import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/login.vue'
import dashboard from "../views/dashboard";
import signup from "../views/signup"

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
    {
      path: '/:id/dashboard',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router