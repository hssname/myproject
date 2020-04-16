
export default [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    component: () => import(/* webpackChunkName: "index" */ '../../views/index.vue'),
    meta: {
      title: '工作台'
    }
  },
]
