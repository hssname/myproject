
export default [
  {
    path: '/',
    redirect: '/Introduce'
  },
  {
    path: '/Introduce',
    name: 'Introduce',
    component: () => import(/* webpackChunkName: "Introduce" */ '../../views/Introduce.vue'),
    meta: {
      title: 'web前端资源'
    }
  },
  {
    path: '/doc',
    name: 'doc',
    component: () => import(/* webpackChunkName: "doc" */ '../../views/doc.vue'),
    meta: {
      title: 'web前端资源'
    }
  },
  {
    path: '/interview',
    name: 'interview',
    component: () => import(/* webpackChunkName: "interview" */ '../../views/interview.vue'),
    meta: {
      title: 'web前端资源'
    }
  },
  {
    path: '/signature',
    name: 'signature',
    component: () => import(/* webpackChunkName: "signature" */ '../../views/signature.vue'),
    meta: {
      title: '电子签名'
    }
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
