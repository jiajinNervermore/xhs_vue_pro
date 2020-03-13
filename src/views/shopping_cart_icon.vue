<template>
  <!-- 商城购物车图标 -->
  <div class="shopping_cart_icon" @click="toShoppingCart">
    <img src="require(../assets/shopping/others/01.png)" alt="">
  </div>
</template>
<script>
export default {
  methods: {
    // 购物车跳转
    toShoppingCart(){
      console.log(123)
      this.$router.push('/users/shopping')
    }
  },
};
</script>
<style scoped>
/* 画圆 */
.shopping_cart_icon{
  width:50px;/**宽度 */
  height: 50px;
  background-image: url(../assets/gouwuche.png);
  border-radius: 100px;/**圆角画圆 */
  background-color: #000;/**背景色 */
  background-repeat: no-repeat;/**只显示一张 */
  background-position: 7px,5px;
  position: fixed;/**固定定位 */
  right: 1rem;/**右边出来1rem */
  bottom: 4rem;/**下边上来4rem */
}
</style>