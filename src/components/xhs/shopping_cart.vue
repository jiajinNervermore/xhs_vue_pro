<template>
  <div class="shopping_cart">
    
    <!-- 应用子组件shopping_cart_shop 添加商品栏 -->
    <shop :list="list"></shop>
    <h4 class="text-center mt-4">猜你喜欢</h4>
    <div class="products">
      <product></product>
      <product></product>
    </div>
    <div class="footer">
      <ul class="list-unstyled w-100">
        <li>
          <img
            class="ml-2"
            :src="require(`../../assets/${is_checked ? 'gouSolid-copy.png' : 'yuanquan.png'}`)"
            @click="choose"
            :is_checked="is_checked"
          />
          <span>全选</span>
        </li>
        <li>
          <ul class="clear-cart list-unstyled">
            <li>
              <span>总计:</span>
              <span class="text-danger">￥0</span>
              <p class="text-muted">免运费</p>
            </li>
            <li>
              <span class="clear mr-2 ml-2">结算</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
//引入子组件shop
import shop from "./shopping_cart/shopping_cart_shop.vue";
//引入猜你喜欢栏---商品列表模块
import product from "./product.vue";

export default {
  components: { shop, product },
  data() {
    return {
      is_checked: false,
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
          pic: "e61865991d0c4e19.jpg",
          is_checked: false
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
          pic: "e61865991d0c4e19.jpg",
          is_checked: false
        }
      ]
    };
  },
  methods: {
    choose() {
      this.is_checked=!this.is_checked
    }
  }
};
</script>
<style scoped>
/* 购物车背景色 */
.shopping_cart {
  background-color: #f5f5f5;
}
/* 商品列表弹性布局 */
.products {
  display: flex;
}
/* 页脚样式 */
.footer {
  height: 4rem;
  width: 100%;
  border-top: 0.1rem;
  border-color: lightgray;
  position: fixed;
  bottom: 0;
  background-color: #fff;
}
/* 结算栏弹性布局 */
.footer > ul {
  display: flex;
  height: 4rem;
  line-height: 4rem;
  justify-content: space-between;
}
/* 结算价格 */
.clear-cart {
  display: flex;
}
/* 免运费 */
.clear-cart>li>p{
  margin-top:-3rem;
  font-size: 0.9rem;
  margin-left: 1.4rem;
}
.clear-cart>li>span{
  margin-top: -20px !important;
}
/* 结算按钮 */
.clear {
  width: 4rem;
  height: 2.5rem;
  background-color: #ff0033;
  color: #fff;
  border-radius: 1rem;
  font-size: 1rem;
  padding: 0.2rem 1rem;
}
</style>