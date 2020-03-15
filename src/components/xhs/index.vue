<template>
  <div class="index_all">
    <mt-tab-container v-model="active">
      <mt-tab-container-item id="shouye">
        <div class="index_header">
          <span class="media"><img src="../../assets/IMG.png" alt=""></span>
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
            <div class="gz_header"></div>
            <index-cq></index-cq>
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
      <!--添加"我"组件-->
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
import fakeSearch from './common/fakesearch'
//引入的商城组件
import Product from '../../views/carousel'
//引入消息组件
import MessageAll from './messageall'
// 引入首页关注、发现、重庆组件
import IndexCq from '../../views/indexcq'
// 引入我的组件
import Me from "./me"
export default {
  data() {
    return {
      active: "message", //默认消息列表组件显示
      list: [
        { isSelect: true }, //第一个按钮状态 0
        { isSelect: false }, //第二个按钮状态 1
        { isSelect: false }, //第三个按钮状态 2
        { isSelect: false } //第四个按钮状态 3
      ],
      active: "shouye",
      navActive: "guanzhu"
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
    //指定标签名称:子组件对象
    fakeSearch,
    Product,//商城组件
    MessageAll,//消息组件
    IndexCq,//内容组件
    Me,//‘我’组件
  }
};
</script>
<style scoped>
/* 首页总样式 */
.index_all{
  text-align: center;
  /* background-color: #fff; */
}
/* 首页头部 */
.index_all .index_header{
  width:100%;/**宽度 */
  height: 6rem;/**高度 */
  border-bottom: 1px solid lightgray;
  position: fixed;
  z-index: 10;
  top:0;
  background-color: #fff;
}
/**在头部下方填充和头部高度一样的空块级元素 */
.gz_header{
  height: 6rem;
}
/* 拍摄图标 按钮*/
.index_all .media{
  
  position: absolute;
  top:0;left:0;
}
.media img{
  width:3rem;height:3rem;
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
  position: fixed;/**固定定位 */
  bottom:0;/**定位在下方 */
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
  width: 3rem; /**宽度 */
  height: 2rem; /**高度 */
  background-color: #ff0033; /**背景色 */
  color: #fff; /**字体颜色 */
  font-weight: bold; /**字体加粗 */
  padding: 0 1rem; /**内边距 */
  border-radius: 0.75rem; /**圆角 */
  font-size: 36px;
}

/* tabbar选中样式 */
.mint-tabbar .is-selected span {
  color: #000; /**颜色变黑 */
  font-size: 25px; /**选中字体变大 */
}
/* 底部导航栏清除外边距 */
.mint-tabbar .mint-tab-item-icon{
  margin: 0 !important;
}
</style>
