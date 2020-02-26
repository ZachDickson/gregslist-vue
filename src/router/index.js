import Vue from 'vue'
import VueRouter from 'vue-router'
import CarHome from '../views/CarHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'CarHome',
    component: CarHome
  },
]

const router = new VueRouter({
  routes
})

export default router
