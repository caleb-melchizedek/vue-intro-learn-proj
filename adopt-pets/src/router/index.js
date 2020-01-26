import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Cats from '../views/cats.vue'
import Dogs from '../views/dogs.vue'
import Pet from '../views/pet.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/Cats',
    name: 'Cats',
    component: Cats
  },
  {
    path: '/Dogs',
    name: 'Dogs',
    component: Dogs
  },
  {
    path: '/Pet',
    name: 'Pet',
    component: Pet
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
