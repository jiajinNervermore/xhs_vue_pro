import Vue from 'vue' //引入Vue对象
import Router from 'vue-router'//引入路由
//引入自定义组件
import register from './components/xhs/register.vue'
import Carousel from './views/carousel'
Vue.use(Router)//将路由对象注册
//配置组件访问路径
export default new Router({
  routes:[
    {path:"/signin",component:register},
    {path:"/carousel",component:Carousel}
  ]
})