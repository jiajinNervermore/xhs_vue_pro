import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uname: "",
    moreList: [
      { title: "发现好友", img: "haoyou.png" }, 
      { title: "我的草稿", img: "caogao.png" }, 
      { title: "购物车", img: "gouwuche1.png" }, 
      { title: "订单", img: "icon-.png" }, 
      { title: "卡券", img: "qiaquan.png" }, 
      { title: "心愿单", img: "xinyuandanyuanwangdan.png" }, 
      { title: "小红卡会员", img: "R.png" }, 
      { title: "免流量", img: "liuliang.png" }, 
      { title: "钱包", img: "haoyou.png" }, 
      { title: "帮助与客服", img: "kefu.png" }, 
      { title: "扫一扫", img: "552dc065f0478.png" },
      { title: "设置", img: "shezhi.png" }]
  },
  mutations: { //专门负责修改state中的变量
    setUname(state, uname) {
      state.uname = uname;
    }
  },
  actions: { //专门负责发送异步ajax请求，从服务器端获取数据
    login(context, user) { //context代表整个vuex对象
      (async function () {
        var result = await axios.get("/users/signin", {
          params: user
        });
        context.commit("setUname", result.data.uname);
      })()
    }
  },
  modules: {
  }
})
