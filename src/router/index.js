import Vue from 'vue'
import VueRouter from 'vue-router'
// import attendance from './attendance' // 考勤路由
console.log("ceshi")
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: resolve => require(['../page/index.vue'], resolve)
  },
  {
    path: '/login',
    name: 'login',
    component: resolve => require(['../page/login.vue'], resolve)
  },
  {
    path: '/sql',
    name: 'sql',
    component: resolve => require(['../page/sql.vue'], resolve)
  },
  // {
  //   path: '/notice',
  //   name: 'notice',
  //   component: () => import('../page/notice/notice'),
  //   meta: {
  //     title: '消息公告'
  //   }
  // },
  // {
  //   path: '/messageDetail',
  //   name: 'messageDetail',
  //   component: () => import('../page/notification/messageDetail'),
  //   meta: {
  //     title: '通知公告详情页'
  //   }
  // },
  // ...attendance
]

const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {
// })
export default router
