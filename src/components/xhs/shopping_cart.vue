<template>
  <div class="shopping_cart">
    <!-- 应用子组件shopping_cart_shop 添加商品栏 -->
    <shop :list="carts" @changeCheck="changeCheck"></shop>
    <h4 class="text-center mt-4">猜你喜欢</h4>
    <div class="products">
      <product></product>
      <product></product>
    </div>
    <div class="footer">
      <ul>
        <li>
          <img
            class="ml-2"
            :src="require(`../../assets/${is_checked ? 'gouSolid-copy.png' : 'yuanquan.png'}`)"
            @click="choose"
          />
          <span>全选</span>
        </li>
        <li>
          <ul class="clear-cart list-unstyled">
            <li>
              <span>总计:</span>
              <span class="text-danger">￥{{totalPrice}}</span>
              <p class="text-muted">免运费</p>
            </li>
            <li>
              <span class="clear mr-2 ml-2" @click="clear">结算</span>
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
//引入vuex属性方法
import { mapState, mapMutations } from "vuex";
import { mapActions } from "vuex";
export default {
  components: { shop, product },
  data() {
    return {
      is_checked: false,
      uid: 0,
      carts: []
    };
  },
  created() {
    // 根据vuex保存的用户信息，取出用户编号，查询用户购物车信息
    this.uid = this.result.uid;
    console.log(this.uid);
    // this.cart({uid:this.uid});

    var obj = { uid: this.uid };
    this.axios
      .get("cart", { params: obj })
      .then(res => {
        if (res.data.code == 1) {
          // 强行赋值两个变量，is_checked代表是否选中，is_activity代表是否有促销打折活动
          res.data.data.map(item => {
            item.is_checked = false;
            item.is_activity = true;
          });
          //将最后的结果赋值给carts
          this.carts = res.data.data;
          console.log(this.carts);
          this.$store.commit("setCartList", this.carts);
        }
      })
      .catch(err => console.log(err));
  },
  computed: {
    //计算总的选中商品个数
    totalPrice() {
      let sum = 0;
      let total = 0;
      this.carts.map(item => {
        item.is_checked && sum++;
        item.is_checked && (total += item.count * item.price);
      });
      return total;
    },
    ...mapState(["result", "CartList"]) //取出用户信息，和购物车信息
  },
  methods: {
    //取出vuex中保存的异步请求方法
    ...mapActions([
      //去vuex的actions中取出名为login的函数放到此地
      "cart" //,cart(context,uid)
    ]),
    ...mapMutations(["setCartList"]),
    //setUname(uname){ this.$store.commit("setName",uanme) }
    //改变单个商品的选中状态（子传父）
    changeCheck(i) {
      //触发父组件定义的自定义事件
      this.carts[i].is_checked = !this.carts[i].is_checked;
      let sum = 0;
      this.carts.map(item => {
        item.is_checked && sum++;
      });
      //子组件选中状态控制全选状态选中与否
      sum == this.carts.length
        ? (this.is_checked = true)
        : (this.is_checked = false);
      
    },
    //改变所有商品的选中状态
    choose() {
      this.carts.map(item => {
        item.is_checked = !item.is_checked;
      });
      this.is_checked = !this.is_checked;
    },
    // 结算按钮
    clear() {
      if (this.totalPrice != 0) {
        this.$router.push("/users/pay");
      }
    }
  }
};
</script>
<style scoped>
ul {
  list-style: none;
}
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
.clear-cart > li > p {
  margin-top: -3rem;
  font-size: 0.9rem;
  margin-left: 1.4rem;
}
.clear-cart > li > span {
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