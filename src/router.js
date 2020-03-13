import Vue from 'vue' //引入Vue对象
import Router from 'vue-router'//引入路由
//引入自定义组件 注册
import signin from './components/xhs/signin.vue'
//引入自定义组件 购物车
import shopping from './components/xhs/shopping_cart'
//引入自定义组件 支付页面
import pay from './components/xhs/pay'
//引入自定义组件
// import register from './components/xhs/register.vue'
import Carousel from './views/carousel'
import Indexcq from './views/indexcq'
Vue.use(Router)//将路由对象注册
//配置组件访问路径
export default new Router({
  routes:[
    {path:"/users/signin",component:signin},
    {path:"/users/shopping",component:shopping},
    {path:"/users/pay",component:pay},
    // {path:"/signin",component:register},
    {path:"/indexcq",component:Indexcq},
    {path:"/signin",component:register},
    {path:"/carousel",component:Carousel}
  ]
})