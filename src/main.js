import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//功能一：引入和配置Mint-ui组件库
//1.引入mint-ui所有组件
import MintUI from "mint-ui"
//2.单独引入mint-ui 样式组件
import "mint-ui/lib/style.css"
import vuex from "vuex"
//2.注册
Vue.use(vuex)
//引入axios 模块
import axios from "axios"
//添加默认请求服务器url
axios.defaults.baseURL="http://127.0.0.1:9527"
//配置保存session数据
axios.defaults.withCredentials=true;
//给vue原型对象添加axios函数
Vue.prototype.axios=axios;
//3.将Mint-ui对象注册vue实例
Vue.use(MintUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
