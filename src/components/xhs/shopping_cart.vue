<template>
  <div class="shopping_cart">
    <!-- 应用子组件shopping_cart_shop 添加商品栏 -->
    <shop :list="list" @changeCheck="changeCheck"></shop>
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
  created() {
    // 根据vuex保存的用户信息，取出用户编号，查询用户购物车信息
    this.uid = this.result.uid;
    console.log(this.uid);
    // this.cart({uid:this.uid});
    console.log(this.CartList);
    var obj = { uid: this.uid };
    this.axios
      .get("cart", { params: obj })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  },
  computed: {
    //计算总的选中商品个数
    totalPrice() {
      let sum = 0;
      let total = 0;
      this.list.map(item => {
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
      this.list[i].is_checked = !this.list[i].is_checked;
      let sum = 0;
      this.list.map(item => {
        item.is_checked && sum++;
      });
      //子组件选中状态控制全选状态选中与否
      sum == this.list.length
        ? (this.is_checked = true)
        : (this.is_checked = false);
    },
    //改变所有商品的选中状态
    choose() {
      this.list.map(item => {
        item.is_checked = !item.is_checked;
      });
      this.is_checked = !this.is_checked;
    },
    // 结算按钮
    clear() {
      if (this.totalPrice != 0) {
        this.$router.push("/users/pay");
      }
    },
    loadMore() {
      // 1.创建变量url保存请求地址48
      let url = "cart";
      // 1.1修改页码Pno的值
      // this.pno++;
      // // 2，创建变量obj   请求服务器参数
      // let obj = { pno: this.pno, pageSize: 5 };
      //3.方法ajax请求
      this.axios.get(url).then(res => {
        console.log(res);
        //3.1获取服务器返回数据 code == -2 提示请登录
        if (res.data.code == -2) {
          this.$router.push("/users/signin");
        } else {
          //3.2code == 1返回数据
          this.list = res.data.data;
          //遍历list并在其元素内（对象）添加一个属性isAgree 属性值为false
          this.list.map(item => {
            item.isAgree = false;
          });
          var sum = 0;
          this.list.map(item => {
            sum += item.count;
          });
          this.$store.commit("addCart", sum);
        }
      });
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