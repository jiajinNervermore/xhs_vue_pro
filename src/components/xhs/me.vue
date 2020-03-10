<template>
  <div class="me">
    <more class="more" :isClick="isClick"></more>
    
    <div class="header">
      <img src="../../assets/sanheng.png" alt="" @click="show">
      <div class="text-center">
        <h4 class="m-1">Nevermore</h4>
        <p>小红书号:79777777</p>      
      </div>
      <img src="../../assets/fenxiang.png" alt="">
    </div>
  </div>
</template>
<script>
// 引入更多菜单栏
import more from "./more";
export default {
  components: { more },
  data(){
    return{
      isClick:false
    }
  },
  methods:{
    show(){
      this.isClick=true
      var me = document.getElementsByClassName("me")[0]
      me.classList.add("opa")
      console.log(me)
    }
  }
};
</script>
<style scoped>
.me{width:100%;}
/* 更多菜单样式 */
.more {
  width: 0;
}

/* 头部样式 */
.header {
  width: 100%;/**宽度 */
  height: 5rem;/**高度 */
  position: fixed;/**固定定位 */
  top:0;
  border-bottom: 1px solid #ccc;/**下边框 */
  display: flex;/**弹性布局 */
  justify-content: space-around;/**分散对齐 */
  padding: 1rem 1rem;/**内边距 */
  align-items: center;/**垂直居中 */
  z-index: 1;
}
.opa{
  background-color:#ff0033 !important;
}
</style>