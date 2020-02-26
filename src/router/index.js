import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CarHome from '../views/CarHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/cars',
    name: 'CarHome',
    component: CarHome
  }
]

const router = new VueRouter({
  routes
})

export default router
