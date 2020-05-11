
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
  {
    path: '/chatRoom',
    name: 'chatRoom',
    component: () => import(/* webpackChunkName: "chatRoom" */ '../../views/chatRoom.vue'),
    meta: {
      title: '聊天室'
    }
  },
]
