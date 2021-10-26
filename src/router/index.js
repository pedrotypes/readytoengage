import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Home.vue'),
  },

  // Special combat area
  {
    path: '/combat',
    name: 'Combat',
    component: () =>
      import(/* webpackChunkName: "combat" */ '../views/Combat.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
