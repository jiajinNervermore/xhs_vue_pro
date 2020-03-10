import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
//功能一：引入和配置Mint-ui组件库
//1.引入mint-ui所有组件
import MintUI from "mint-ui"
//2.单独引入mint-ui 样式组件
import "mint-ui/lib/style.css"
//3.引入兄弟传参所用bus.js
import bus from "./bus.js"
//将bus添加到Vue原型对象中
Vue.prototype.bus = bus
//引入axios 模块
import axios from "axios"
//添加默认请求服务器url
axios.defaults.baseURL="http://127.0.0.1:9527"
//配置保存session数据
axios.defaults.withCredentials=true;
//给vue原型对象添加axios函数
Vue.prototype.axios=axios;
//1.引入vuex组件
import vuex from "vuex"
//2.注册
Vue.use(vuex)
//3.创建存储对象
/*var store = new vuex.Store({
  state:{
    //全局共享的数据
    cartCount:0
  },
  mutations:{//所有修改全局共享数据函数
    subCart(state){state.cartCount--},
    addCart(state,n){state.cartCount=n},
    clearCart(state){state.cartCount=0}
  },
  getters:{//所有获取全局共享数据函数
    getCartCount(state){return state.cartCount}
  }
})*/
//3.将Mint-ui对象注册vue实例
Vue.use(MintUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
