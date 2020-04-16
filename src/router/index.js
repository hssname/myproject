import Vue from 'vue'
import VueRouter from 'vue-router'
import RouterConfig from './modules'     //引入业务逻辑模块

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'name',
      component: () => import(/* webpackChunkName: "name" */ '../views/Layout/Layout.vue'),
      children: RouterConfig
    },
  ]
})

export default router
