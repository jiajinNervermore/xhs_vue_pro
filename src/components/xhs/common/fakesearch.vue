<template>
  <div class="fakeSearch">
    <div>
      <img src="../../../assets/sousuo1.png" alt />
      <span>酸奶千层蛋糕</span>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.fakeSearch {
  width: 100%; /**宽度 */
  height: 2rem; /**高度 */
  border-radius: 1rem; /**圆角 */
  background-color: ghostwhite; /**背景色 */
  text-align: center; /**子元素左右居中 */
  font-size: 1rem; /**字体大小 */
  color: lightgray; /**字体颜色 */
  line-height: 2rem; /**行高 */
  margin-top: 0.3rem;/**上下外边距 */
  margin-bottom: 0.5rem;
}
img {
  vertical-align: middle;/**图片上下居中 */
  margin-right: 1rem;/**右边距 */
}
</style>