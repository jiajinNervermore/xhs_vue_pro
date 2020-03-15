<template>
  <div class="me" >
    <more class="more" :isClick="isClick"></more>

    <div class="header">
      <img src="../../assets/sanheng.png" alt class="show" @click="shows"/>
      <div class="text-center">
        <h4 class="m-1">Nevermore</h4>
        <p>小红书号:79777777</p>
      </div>
      <img src="../../assets/fenxiang.png" alt />
    </div>
    <div id="zhezhaoceng" class="fide" @click="fides"></div>
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
    shows() {
      // 获取遮罩层
      var zzc = document.getElementById('zhezhaoceng ');
    console.log(zzc)
      this.isClick = true;
      setTimeout(() => {
        zzc.classList.add("show")
      }, 200);
    },
    fides() {
      this.isClick = false;
      setTimeout(() => {
        zzc.classList.add("fide")
      }, 200);
    }
  }
};
</script>
<style scoped>
.me {
  width: 100%;
}
/* 更多菜单样式 */
.me .more {
  width: 0;
}

/* 头部样式 */
.me .header {
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
.me #zhezhaoceng {
  /**宽高 */
  width: 100%;
  height: 100%;
  opacity: 0.3;
  background-color: #000;
  position: absolute;
  z-index: 5;
  top: 0;
  transition: all 0.2s linear;
}
.fide{
  display: none;
}
.show{
  display: block;
}
</style>