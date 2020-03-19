<template>
  <div class="pay">
    <div class="header">
      <!-- 返回购物车 -->
      <a href="javascript:;" class="mr-5 ml-1" @click="backToShoppingCart">
        <img src="../../assets/icon.png" alt />
      </a>
      <h3 class="ml-5 mr-5">订单支付</h3>
    </div>
    <div class="space"></div>
    <div class="user_message">
      <mt-field label="收货人" placeholder="请使用真实姓名" v-model="username"></mt-field>
      <mt-field label="联系电话" placeholder="收件人电话号码" v-model="phone" type="tel"></mt-field>
      <mt-field label="所在地区" placeholder="请选择" v-model="area"></mt-field>
      <mt-field label="详细地址" placeholder="输入或点击右侧选择地址" v-model="address"></mt-field>
      <div id="copy" class="hide">
        <textarea name id="textar" cols="43" rows="6" placeholder="粘贴文本至此处,可自动识别信息并填写"></textarea>
        <div class="control">
          <span class="close" @click="close">清除</span>
          <span class="submit">提交</span>
        </div>
      </div>
      <div class="copy_board text-center" @click="change">
        <span>地址粘贴板</span>
        <img :src="require(`../../assets/${show_or_hide?'arrow_1.png':'arrow.png'}`)" />
      </div>
      <mt-field label="订购人" placeholder="请填写证件姓名" v-model="user"></mt-field>
      <mt-field label="身份证号" placeholder="18位身份证号码" v-model="id" type="number"></mt-field>
      <p class="text-muted ml-2">根据海关要求，购买跨境商品需要提供订购人身份信息（请与支付账号实名信息相同）本信息仅用于海关清关，小红书保证信息安全</p>
      <div class="d-flex justify-content-between m-2">
        <span>设置为默认地址</span>
        <mt-switch v-model="value"></mt-switch>
      </div>
      <product v-for="(item,i) of carts" :key="i" :pic="item.details_pic" :count="item.count" :store="item.store" :title="item.title" :price="item.price" :keyword="item.key_word"></product>
      <div class="pay_method p-2 m-2">
        <span>支付方式</span>
        <div class="row no-gutters mb-2 align-items-center">
          <span class="col-1">
            <img src="../../assets/umidd17.png" alt />
          </span>
          <span class="col-8 offset-1">支付宝</span>
          <span class="col-2 text-right" @click="zfb">
            <img :src="require(`../../assets/${pymd?'yuanquan.png':'gouSolid-copy.png'}`)" alt />
          </span>
        </div>
        <div class="row no-gutters mb-2 align-items-center">
          <span class="col-1">
            <img src="../../assets/weixinzhifu.png" alt />
          </span>
          <span class="col-8 offset-1">微信</span>
          <span class="col-2 text-right" @click="wx">
            <img :src="require(`../../assets/${pymd?'gouSolid-copy.png':'yuanquan.png'}`)" alt />
          </span>
        </div>
      </div>
      <div class="m-2 p-2">
        <ul class="list-unstyled">
          <li class="d-flex justify-content-between">
            <span>平台优惠券</span>
            <span class="text-danger">-￥20</span>
          </li>
          <li class="d-flex justify-content-between">
            <span>满减优惠</span>
            <span>{{total}}</span>
            <span class="text-danger">-￥30</span>
          </li>
        </ul>
      </div>
      <div class="invoice m-2 p-2 row no-gutters">
        <span class="col-2">发票</span>
        <span class="col-1">
          <img src="../../assets/i.png" alt />
        </span>
        <span class="offset-5 col-3 text-muted">暂不开票</span>
        <span>
          <img src="../../assets/icon-r.png" alt />
        </span>
      </div>
      <p>
        点击支付则表示您同意&nbsp;
        <a href="javascript:;" class="text-dark know">&lt;&lt;用户购买须知&gt;&gt;</a>
      </p>
      <div class="footer row no-gutters">
        <span class="col-2 text-center">总计&nbsp;:</span>
        <span class="col-2">￥{{total}}</span>
        <div @click="pay" class="pay_off offset-4 col-4">
          <span>抢先支付&nbsp;{{minute}}&nbsp;{{second}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//引入子组件  商品
import product from "./shopping_cart/pay_product";
import {mapState} from 'vuex';
export default {
  components: { product },
  data() {
    return {
      username: "",
      phone: "",
      area: "",
      address: "",
      user: "",
      id: "",
      show_or_hide: false,
      value: false,
      pymd: false,
      count_down: "",
      minutes: 30,
      seconds: 0,
      carts:[]//用一个变量保存购物车选中的商品
    };
  },
  created() {
    console.log(this.CartList)
    //如果是选中状态才让它显示
    this.CartList.map(item=>{
      if(item.is_checked){
        this.carts.push(item)
      }
    })
  },
  computed: {
    //总价:total
    total(){
      var total = 0
      this.CartList.map(item=>{
        if(item.is_checked){
          total+=item.price*item.count
        }
        return total
      })
    },
    second: function() {
      return this.num(this.seconds)
      
    },
    ...mapState(['CartList']),
    minute: function() {
      return this.num(this.minutes);
    }
  },
  mounted() {
    this.add();
  },
  watch: {
    second: {
      handler(newVal) {
        this.num(newVal);
      }
    },
    minute: {
      handler(newVal) {
        this.num(newVal);
      }
    }
  },
  methods: {
    // 返回键
    backToShoppingCart() {
      this.$router.push("/users/shopping");
    },
    num: function(n) {
      return n < 10 ? "0" + n : "" + n;
    },
    add: function() {
      var _this = this;
      var time = setInterval(function() {
        if (_this.seconds === 0 && _this.minutes !== 0) {
          _this.seconds = 59;
          _this.minutes -= 1;
        } else if (_this.minutes === 0 && _this.seconds === 0) {
          _this.seconds = 0;
          window.clearInterval(time);
        } else {
          _this.seconds -= 1;
        }
      }, 1000);
    },

    //粘贴板显示隐藏功能
    change() {
      this.show_or_hide = !this.show_or_hide;
      copy.className == "show"
        ? (copy.className = "hide")
        : (copy.className = "show");
    },
    // 粘贴板清除按钮
    close() {
      var text = document.getElementById("textar");
      text.value = "";
    },
    // 支付方法
    zfb() {
      this.pymd = !this.pymd;
    },
    wx() {
      this.pymd = !this.pymd;
    },
    // 结算入口
    pay() {
      console.log("支付中...");
    }
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
}
/* 页头 */
.pay > .header {
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  background-color: #fff;
  height: 4rem;
  width: 100%;
  font-size: 0.8rem;
  z-index: 10;
}
/* 撑高度 */
.space {
  height: 4rem;
}
/* 控制粘贴板的显示隐藏 */
.show {
  display: block;
}
.hide {
  display: none;
}
/* 粘贴板文本域 */
#textar {
  width: 90%;
  padding: 1rem;
  margin: 1rem;
  border: none;
  resize: none;
  background-color: #fff;
}
/* 粘贴板 */
.pay #copy {
  position: relative;
}
/* 粘贴板提交清除 */
.pay .control {
  position: absolute;
  bottom: 0;
  width: 100%;
  font-size: 1rem;
}
/* 粘贴板清除按钮 */
.pay .close {
  position: absolute;
  right: 7rem;
  bottom: 2.5rem;
  font-size: 16px;
}
/* 粘贴板提交按钮 */
.pay .control > .submit {
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  width: 4rem;
  height: 2rem;
  background-color: #ff6666;
  line-height: 2rem;
  padding: 0;
  text-align: center;
  border-radius: 1rem;
  color: #fff;
}
/* 页脚支付栏 */
.pay .footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  height: 4rem;
  background-color: #fff;
  border-top: 1px solid lightgray;
  padding-right: 1rem;
  z-index: 20;
}
.pay .know:after {
  content: "";
  display: block;
  height: 4rem;
}
/* 支付按钮 */
.pay .pay_off {
  height: 2.5rem;
  text-align: center;
  background-color: #ff0033;
  color: #fff;
  border-radius: 1.5rem;
  padding: 0 1rem;
  line-height: 2.5rem;
  font-size: 0.8rem;
}
</style>