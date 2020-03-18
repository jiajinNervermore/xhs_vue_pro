<template>
  <div class="page-tabbar">
    <msg-title></msg-title>
    <p class="msg">
      <span>开启推送通知，及时查收消息</span>
      <span class="kaiqi">开启</span>
    </p>
    <div class="page-wrap">
      <!--Home.vue-->
      <!--1:调用顶部标题子组件-->
      <titlebar :bottomTitle="bottomTitle"></titlebar>

      <!--2:调整布局:保存标题子组件高度-->
      <div style="margin-top:48px;"></div>
      <!--3:消息列表面板-->
    </div>
  </div>
</template>
<script>
//引入头部
import MsgTitle from "./common/messageTitle";
//1:引入顶部标题子组件
import titlebar from "./common/titlebar.vue";
//1.1:引入消息列表子组件
import messagelist from "./common/messagelist.vue";
import mlist from "./json/messagelist.json";
//1.2:引入底图图片组件
import tabbar from "./common/tabbar.vue"; // 底部导航栏

export default {
  data() {
    return {
      bottomTitle: [
        { name: "赞和收藏", url: "zan.png" },
        { name: "赞和收藏", url: "guanzhu.png" },
        { name: "赞和收藏", url: "pinglun.png" }
      ],
      active: "message", //默认消息列表组件显示
      list: [
        { isSelect: true }, //第一个按钮状态 0
        { isSelect: false }, //第二个按钮状态 1
        { isSelect: false }, //第三个按钮状态 2
        { isSelect: false } //第四个按钮状态 3
      ]
    };
  },

  methods: {
    changeState(idx) {
      //功能:完成点击按钮切换图片任务 当前按钮true 其它按钮false
      ///参数idx按钮下标 0 1 2 3
      //1:创建变量size 表示数组长度
      var size = this.list.length;
      //2:创建循环遍历数据list每个元素
      for (var i = 0; i < size; i++) {
        //3:判断如果参数下载idx与当前按钮下标相同
        if (i == idx) {
          this.list[i].isSelect = true;
        } else {
          this.list[i].isSelect = false;
        }
        //4:当前元素选中状态true
        //5:其它元素默认状态false
      }
    }
  },
  //2:注册顶部标题子组件
  components: {
    MsgTitle,
    //指定标签名称:子组件对象
    titlebar, //顶部标题子组件
    messagelist //中间消息列表子组件
  }
};
</script>
<style scoped>
.msg::before {
  content: "";
  display: block;
  height: 3rem;
}
.msg {
  margin: 1rem;
}
/*1:最外层父元素*/
.page-tabbar {
  overflow: hidden; /*溢出隐藏*/
}
/*2:内层元素*/
.page-wrap {
  overflow: auto; /*数据多出现滚动条*/
  padding-bottom: 60px; /*底部导栏空间*/
}
/*3:覆盖mint-ui组件原有样式-tabbar按钮中文字选中样式 42*/
.mint-tabbar > .mint-tab-item.is-selected {
  background-color: transparent;
  color: #696969;
}
/*4:覆盖mint-ui组件原有样式-tabbar按钮中文字默认样式*/
.mint-tabbar > .mint-tab-item {
  color: #999999;
}
</style>
