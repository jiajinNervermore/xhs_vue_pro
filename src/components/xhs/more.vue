<template>
  <div :class="isClick?'moreTrans':'more'">
    <div class="header">
      <h1 class="mt-5">更多</h1>
    </div>
    <div class="space"></div>
    <div class="body">
      <div v-for="(item,index) of moreList" :key="index" class="mb-4 mt-4">
        <img :src="require(`../../assets/${item.img}`)" class="mr-2" alt />
        <span>{{item.title}}</span>
      </div>
    </div>
  </div>
</template>
<script>
//引入vuex 保存的数据
import { mapState } from "vuex";
export default {
  data() {
    return {
      isClick: false
    };
  },
  props:{isClick:Boolean},
  computed: {
    ...mapState(["moreList"])
  },
  mounted() {
    console.log(this.moreList);
  },
  updated() {
    console.log(this.isClick);
  }
};
</script>
<style scoped>
/*组件样式*/
.more {
  position: fixed; /**固定定位 */
  width: 80%; /**宽度 */
  padding: 3rem; /**内边距 */
  z-index: 10; /**定位层级 */
  left: -80%; /**以左边为参考位置偏移0 */
  background-color: #fff;
}
.moreTrans {
   
  position: fixed; /**固定定位 */
  width: 80% !important;
  padding: 3rem; /**内边距 */
  z-index: 10; /**定位层级 */
  left: 0; /**以左边为参考位置偏移0 */
 
  transition: all 1s linear;
  
}
/**头部样式 */
.header {
  height: 6rem; /**高度 */
  position: fixed; /**固定定位 */
  z-index: 11; /**定位层级 */
  top: 0; /**定位以上面为参考边界偏移0 */
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