import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cozinha from '../views/Cozinha.vue'
import Mesas from '../views/Mesas.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
	{
    path: '/cozinha',
    name: 'Cozinha',
    component: Cozinha
  },
	{
    path: '/mesas',
    name: 'Mesas',
    component: Mesas
  }
]

const router = new VueRouter({
  routes
})

export default router
