<template>
  <div class="me" @click="show">
    <more class="more" :isClick="isClick"></more>

    <div class="header">
      <img src="../../assets/sanheng.png" alt class="show" />
      <div class="text-center">
        <h4 class="m-1">Nevermore</h4>
        <p>小红书号:79777777</p>
      </div>
      <img src="../../assets/fenxiang.png" alt />
    </div>
    <div class="zzc"></div>
  </div>
</template>
<script>
// 引入更多菜单栏
import more from "./more";
export default {
  components: { more },
  data() {
    return {
      isClick: false
    };
  },
  methods: {
    // 显示更多按钮
    show(e) {
      var show = document.getElementsByClassName("show")[0];
      //获取‘更多’元素
      var mores = document.getElementsByClassName("more")[0];
      // 获取遮罩层
      var zzc = document.getElementsByClassName('zzc')[0];
      console.log(e.target,mores)
      if (e.target == show) {
        this.isClick = true;
        setTimeout(()=>{
          zzc.style.display='block'
        },200)
        
      } else if (e.target==zzc) {
        this.isClick = false;
        setTimeout(()=>{
          zzc.style.display='none'
        },200)
      }
    }
  }
};
</script>
<style scoped>
.me {
  width: 100%;
}
/* 更多菜单样式 */
.more {
  width: 0;
}

/* 头部样式 */
.header {
  width: 100%; /**宽度 */
  height: 5rem; /**高度 */
  position: fixed; /**固定定位 */
  top: 0;
  border-bottom: 1px solid #ccc; /**下边框 */
  display: flex; /**弹性布局 */
  justify-content: space-around; /**分散对齐 */
  padding: 1rem 1rem; /**内边距 */
  align-items: center; /**垂直居中 */
  z-index: 1;
}
/* 遮罩层 */
.zzc{
  /**宽高 */
  width:100%;
  height: 100%;
  opacity: 0.3;
  background-color: #000;
  position: absolute;
  z-index: 5;
  display: none;
  top:0;
  transition: all 0.2s linear;
}
</style>