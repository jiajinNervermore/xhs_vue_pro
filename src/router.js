import Vue from 'vue' //引入Vue对象
import Router from 'vue-router'//引入路由
//引入自定义组件 注册
import register from './components/xhs/register.vue'
//引入自定义组件 购物车
import shopping from './components/xhs/shopping_cart'
Vue.use(Router)//将路由对象注册
//配置组件访问路径
export default new Router({
  routes:[
    {path:"/signin",component:register},
    {path:"/shopping",component:shopping}
  ]
})