<template>
  <div class="me">
    <more class="more" :isClick="isClick"></more>

    <div class="header">
      <img src="../../assets/sanheng.png" alt class="show" @click="show" />
      <div class="text-center">
        <h4 class="m-1">Nevermore</h4>
        <p>小红书号:79777777</p>
      </div>
      <img src="../../assets/fenxiang.png" alt/>
    </div>
    <div class="zzcs" @click="hide">hello world</div>
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
    show() {
      var show = document.getElementsByClassName("show")[0];
      //获取‘更多’元素
      var mores = document.getElementsByClassName("more")[0];
      // 获取遮罩层
      var zzc = document.getElementsByClassName("zzcs")[0];
      console.log(mores, zzc);

      this.isClick = true;
      setTimeout(() => {
        console.log(123);
        zzc.style.display="block";
      }, 200);
    },
    hide() {
      var zzc = document.getElementsByClassName("zzcs")[0];
      this.isClick = false;
      setTimeout(() => {
        zzc.style.display = "none";
      }, 200);
    }
  }
};
</script>
<style scoped>
.me {
  width: 100%;
  height: 100%;
}
/* 更多菜单样式 */
.me .more {
  height: 100%;
}
/* 更多菜单样式 */
.more {
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
  padding: 1rem 0; /**内边距 */
  align-items: center; /**垂直居中 */
  z-index: 1;
}
/* 遮罩层 */
.me .zzcs {
  /**宽高 */
  width: 100%;
  height: 1000px;
  opacity: 0.3;
  background-color: #000;
  position: fixed;
  z-index: 5;
  top: 0;
  display: none;
  transition: all 0.2s linear;
}
.show-zzc {
  display: block;
}
</style>