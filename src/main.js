import Vue from 'vue'
import App from './App.vue'//引入VueRouter
import router from './router/index.js'
//引入路由器
import ElementUI from 'element-ui'
console.log(router)
Vue.use(ElementUI)
new Vue({
  el: '#app',
  router:router,
  render: h => h(App),
})
