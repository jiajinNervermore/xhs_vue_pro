<template>
  <div :class="isClick?'moreTrans':'more'">
    <div :class="isClick?'headerTrans':'header'">
      <h1 class="gengduo">更多</h1>
    </div>
    <div class="body">
      <div v-for="(item,index) of moreList" :key="index" class="menu">
        <img :src="require(`../../assets/${item.img}`)"  alt />
        <span>{{item.title}}</span>
      </div>
    </div>
  </div>
</template>
<script>
//引入vuex 保存的数据
import { mapState } from "vuex";
export default {
  props: { isClick: Boolean },
  computed: {
    ...mapState(["moreList"])
  },
  updated() {
    console.log(this.isClick);
  }
};
</script>
<style scoped>
/**更多 */
.gengduo::before{
  content: "";
  display: inline-block;
  width:2rem;
}
.body{
  padding: 2rem;
  text-align: left;
}
/**填充 */
.body::before{
  content: "";
  display: block;
  height: 6rem;
}/**菜单栏 */
.menu{
  margin:1rem 0;
  height: 2rem;
 display: flex;
 align-items: center;
}
.menu span{
  margin-left: 1rem;
}
/*组件样式*/
.more {
  position: fixed; /**固定定位 */
  width: 0; /**宽度 */

  z-index: 10; /**定位层级 */
  left: -80%; /**以左边为参考位置偏移0 */
  background-color: #fff;
  height: 100%;
  overflow:auto;
  transition: all 0.2s linear;
}
.moreTrans {
  overflow:auto;
  height: 100%;
  position: fixed; /**固定定位 */
  width: 75% !important;
  z-index: 10; /**定位层级 */
  left: 0; /**以左边为参考位置偏移0 */

  transition: all 0.2s linear ;
}
/**头部样式 隐藏部分*/
.header {
  width: 0;
  height: 6rem; /**高度 */
  position: fixed; /**固定定位 */
  z-index: 10; /**定位层级 */
  top: 0; /**定位以上面为参考边界偏移0 */
  left: -80%;
  background-color: #fff;

  transition: all 0.2s linear;
}
/**头部样式隐藏部分 */
.headerTrans {
  height: 6rem; /**高度 */
  position: fixed; /**固定定位 */
  z-index: 10; /**定位层级 */
  top: 0; /**定位以上面为参考边界偏移0 */
  background-color: #fff;
  width: 75%;
  transition: all 0.2s linear;
  left: 0;
  line-height: 6rem;
  text-align: left;
}
/* 头部下方撑空间 */
.space {
  height: 6rem; /**高度 */
}
.body img {
  width: 1.5rem;
  height: 1.5rem;
}
</style>