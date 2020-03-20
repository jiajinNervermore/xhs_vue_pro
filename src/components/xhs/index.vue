<template>
  <div class="index_all">
    <mt-tab-container v-model="active">
      <mt-tab-container-item id="shouye">
        <div class="index_header">
          <span class="media">
            <img src="../../assets/IMG.png" alt />
          </span>
          <mt-navbar v-model="navActive">
            <mt-tab-item id="guanzhu">
              <span>关注</span>
            </mt-tab-item>
            <mt-tab-item id="faxian">
              <span>发现</span>
            </mt-tab-item>
            <mt-tab-item id="chongqing">
              <span>重庆</span>
            </mt-tab-item>
          </mt-navbar>
          <fake-search></fake-search>
        </div>
        <mt-tab-container v-model="navActive">
          <mt-tab-container-item id="guanzhu">
            <!-- <mt-cell v-for="n in 10" title="tab1"></mt-cell> -->
            <div style="height:6rem;"></div>
            <index-gz></index-gz>
            <div style="height:4rem;"></div>
          </mt-tab-container-item>
          <mt-tab-container-item id="faxian">
            <!-- <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell> -->
            <h1>发现</h1>
          </mt-tab-container-item>
          <mt-tab-container-item id="chongqing">
            <!-- <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell> -->
            <h1>重庆</h1>
          </mt-tab-container-item>
        </mt-tab-container>
      </mt-tab-container-item>
      <mt-tab-container-item id="shangcheng">
        <product></product>
      </mt-tab-container-item>
      <mt-tab-container-item id="xiaoxi">
        <message-all></message-all>
      </mt-tab-container-item>
      <mt-tab-container-item id="wo">
        <me></me>
      </mt-tab-container-item>
    </mt-tab-container>
    <div class="tabbar">
      <mt-tabbar v-model="active">
        <mt-tab-item id="shouye">
          <span>首页</span>
        </mt-tab-item>
        <mt-tab-item id="shangcheng">
          <span>商城</span>
        </mt-tab-item>
        <mt-tab-item id="paizhao">
          <span class="shoot">+</span>
        </mt-tab-item>
        <mt-tab-item id="xiaoxi">
          <span>消息</span>
        </mt-tab-item>
        <mt-tab-item id="wo">
          <span>我</span>
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>
<script>
// 引入的搜索框
import fakeSearch from "./common/fakesearch";
//引入的商城组件
import Product from "../../views/carousel";
//引入消息组件
import MessageAll from "./messageall";
//引入关注组件
import IndexGz from "../../views/indexcq";
//引入我组件
import Me from "./me";
export default {
  data() {
    return {
      list: [
        { isSelect: true }, //第一个按钮状态 0
        { isSelect: false }, //第二个按钮状态 1
        { isSelect: false }, //第三个按钮状态 2
        { isSelect: false } //第四个按钮状态 3
      ],
      active: "shangcheng",
      navActive: "guanzhu"
    };
  },
  created() {
    // 通过bus.js监听自定义函数，一旦有人触发，那么久执行后面这个方法
    // this.bus.$on("active", this.chooseFacePlate.bind(this));
    // console.log(this.active);  
    //   this.chooseFacePlate();
  },
  methods: {
    // 等待触发面板选择，从而确定可以确定是要去到那个面板，接收参数是触发组件发送过来，也就说去哪儿有触发的组件决定
    // chooseFacePlate(faceplate) {
    //   this.active = "shangcheng";
    //   console.log("已触发", faceplate);
    // }
  },

  mounted() {
    // this.chooseFacePlate();
    console.log(this.active);
  },
  //2:注册顶部标题子组件
  components: {
    //指定标签名称:子组件对象
    fakeSearch,
    Product, //商城组件
    MessageAll, //消息组件
    IndexGz, //关注组件
    Me //我 组件
  }
};
</script>
<style scoped>
/* 首页总样式 */
.index_all {
  text-align: center;
  /* background-color: #fff; */
}
/* 首页头部 */
.index_all .index_header {
  width: 100%; /**宽度 */
  height: 6rem; /**高度 */
  border-bottom: 1px solid lightgray;
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: #fff;
}
/* 拍摄图标 按钮*/
.index_all .media {
  position: absolute;
  top: 0;
  left: 0;
}
.media img {
  width: 3rem;
  height: 3rem;
}
/* 顶部导航栏样式 */
.mint-navbar .mint-tab-item-label {
  width: 2rem; /**宽度 */
}
/* 导航栏字体变化 */
.mint-navbar > .mint-tab-item.is-selected span {
  color: #000;
}
.mint-navbar > .mint-tab-item {
  /* 顶部导航栏样式 */
  padding: 0;
}
/* 顶部导航栏边框颜色 */
.mint-navbar > .mint-tab-item.is-selected {
  position: relative;
}
.mint-navbar > .mint-tab-item {
  text-align: center;
  position: relative;
}
.mint-navbar > .mint-tab-item.is-selected {
  border: 0;
}
.mint-navbar > .mint-tab-item.is-selected::after {
  position: absolute;
  content: "";
  background-color: #ff0033;
  width: 50%;
  height: 0.3rem;
  bottom: 0.6rem;
  right: 26%;
}
/*  顶部导航栏内容居中*/
.all .mint-tab-container-item:first-child {
  text-align: center;
}
/* 顶部导航栏样式 */
.mint-navbar {
  width: 60%; /**宽度 */
  text-align: center; /**居中 */
  margin: 0 auto;
}
.mint-tabbar {
  height: 3rem;
  position: fixed; /**固定定位 */
  bottom: 0; /**定位在下方 */
}
/**默认底部导航栏内边距清零 */
.mint-tab-item {
  padding: 0;
}

/**默认底部导航栏字体样式 */
.mint-tab-item-label > span {
  font-size: 20px; /**字体大小 */
  line-height: 3rem; /**行高 */
  color: #a9a9a9;
  margin: 0 !important;
}
/* 加号 */

.mint-tab-item > .mint-tab-item-label > .shoot {
  width: 3rem ; /**宽度 */
  background-color: #ff0033; /**背景色 */
  color: #fff; /**字体颜色 */
  font-weight: bold; /**字体加粗 */
  border-radius: 0.75rem; /**圆角 */
  font-size: 36px;
  padding-left: 1rem;padding-right: 1rem;
  padding-bottom: 0.5rem;
}


/* tabbar选中样式 */
.mint-tabbar .is-selected span {
  color: #000; /**颜色变黑 */
  font-size: 25px; /**选中字体变大 */
}
/* 底部导航栏清除外边距 */
.mint-tabbar .mint-tab-item-icon {
  margin: 0 !important;
}
</style>
