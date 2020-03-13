import Vue from 'vue' //引入Vue对象
import Router from 'vue-router'//引入路由
//引入自定义组件
import details from './components/xhs/details.vue'
import body from './components/xhs/Child/body.vue'
Vue.use(Router)//将路由对象注册
//配置组件访问路径
export default new Router({
  routes:[
    {path:"/details",component:details},
    {path:"/body",component:body}
  ]
})