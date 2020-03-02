<template>
  <div class="pay">
    <div class="header">
      <a href="javascript:;" class="mr-5 ml-1">
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
      <product></product>
      <div class="pay_method p-2 m-2">
        <span>支付方式</span>
        <div class="row no-gutters mb-2 align-items-center">
          <span class="col-1"><img src="../../assets/umidd17.png" alt="" ></span>
          <span class="col-8 offset-1">支付宝</span>
          <span class="col-2 text-right"><img :src="require(`../../assets/${pymd?'yuanquan.png':'gouSolid-copy.png'}`)" alt=""></span>        
        </div>
        <div class="row no-gutters mb-2 align-items-center">
          <span class="col-1"><img src="../../assets/weixinzhifu.png" alt="" ></span>
          <span class="col-8 offset-1">支付宝</span>
          <span class="col-2 text-right"><img :src="require(`../../assets/${pymd?'gouSolid-copy.png':'yuanquan.png'}`)" alt=""></span>        
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
            <span class="text-danger">-￥30</span>
          </li>
        </ul>
      </div>
      <div class="invoice m-2 p-2 row no-gutters">
        <span class="col-2">发票</span>
        <span class="col-1"><img src="../../assets/i.png" alt=""></span>
        <span class="offset-5 col-3 text-muted">暂不开票</span>
        <span><img src="../../assets/icon-r.png" alt=""></span>
      </div>
    </div>
  </div>
</template>
<script>
//引入子组件  商品
  import product from './shopping_cart/pay_product'
export default {
  components:{product},
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
      pymd:false
    };
  },
  methods: {
    change() {
      this.show_or_hide = !this.show_or_hide;
      copy.className == "show"
        ? (copy.className = "hide")
        : (copy.className = "show");
    },
    close() {
      var text = document.getElementById("textar");
      text.value = "";
    }
  }
};
</script>
<style scoped>
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
  padding: 1rem;
  margin: 1rem;
  border: none;
  resize: none;
  background-color: #fffff0;
}
/* 粘贴板 */
#copy {
  position: relative;
}
/* 粘贴板提交清除 */
.control {
  position: absolute;
  bottom: 0;
  width: 100%;
  font-size: 1rem;
}
/* 粘贴板清除按钮 */
.close {
  position: absolute;
  right: 7rem;
  bottom: 2.5rem;
  font-size: 16px;
}
/* 粘贴板提交按钮 */
.control > .submit {
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

</style>