<template>
  <div class="shopping_cart">
    <div class="header"></div>
    <div class="activity"></div>
    <!-- 应用子组件shopping_cart_shop 添加商品栏 -->
    <shop :list="list"></shop>
  </div>
</template>
<script>
//引入子组件shop
import shop from "./shopping_cart/shopping_cart_shop.vue";
export default {
  components: { shop },
  data() {
    return {
      list: [
        {
          store: "兰蔻",
          count: 1,
          detail: "保湿水",
          capacity: "150ml",
          inventory: 10,
          price: 259,
          is_activity: true,
          special_offer: "满300减30元",
          pic:"e61865991d0c4e19.jpg",
          is_checked:false
        },
        {
          store: "谷雨",
          count: 1,
          detail: "面膜",
          capacity: "150ml",
          inventory: 10,
          price: 409,
          is_activity: true,
          special_offer: "满300减30元",
          pic:"e61865991d0c4e19.jpg",
          is_checked:false
        }
      ]
    };
  }
};
</script>
<style scoped>
</style>