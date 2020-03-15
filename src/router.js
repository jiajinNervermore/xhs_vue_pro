import Vue from 'vue' //引入Vue对象
import Router from 'vue-router'//引入路由
//引入自定义组件 注册
import signin from './components/xhs/signin.vue'
//引入自定义组件 购物车
import shopping from './components/xhs/shopping_cart'
//引入自定义组件 支付页面
import pay from './components/xhs/pay'

// 引入我的组件
import me from "./components/xhs/me"
//引入自定义组件
// import register from './components/xhs/register.vue'
//引入主页组件
import index from './components/xhs/index.vue'
// import details from './components/xhs/details.vue'
// import body from './components/xhs/Child/body.vue'
Vue.use(Router)//将路由对象注册
//配置组件访问路径
export default new Router({
  routes: [
    { path: "/users/signin", component: signin },
    { path: "/users/shopping", component: shopping },
    { path: "/users/pay", component: pay },
    { path: "/users/me", component: me },
    { path: "/index", component: index },
    // {path:"/signin",component:register}
    { path: '/', redirect: '/users/signin' },
    {
      path: "/details/:lid",
      name: 'details',
      props: true,
      // props:{lid:3},
      component: () => import(/*webpackChunkName:"details"*/  './components/xhs/details.vue'), props: true
    }
  ],
  mode: "history"
})