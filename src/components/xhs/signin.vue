<template>
  <div>
    <div class="register">
      <!-- <h3>注册页面</h3> -->
      <div class="header">
        <a href="javascript:;">
          <img src="../../assets/icon.png" alt />
        </a>
        <a class="ppl">手机密码登录</a>
      </div>
      <div class="title">
        <h1>登录后更精彩</h1>
      </div>
      <div class="phone">
        <div class="area">
          <span>+86</span>
          <img src="../../assets/down.png" alt />
        </div>
        <input type="text" placeholder="输入手机号码" v-model="phone" maxlength="11" v-focus />
      </div>
      <div class="password">
        <input type="password" placeholder="输入验证码" maxlength="6" v-model="verification_code" id="password"/>
        <button class="verification" @click="getvfc">获取验证码</button>
        <span class="count_down">重新发送{{count_down}}s</span>
      </div>
      <div class="protocaol">
        <span>登录注册代表同意</span>
        <a href="javascript:;">用户协议、隐私政策</a>
      </div>
      <mt-button
        id="lb"
        class="login-btn"
        :disabled="verification"
        size="large"
        @click="login"
      >同意协议并登录</mt-button>
      <p>
        <a href="javascript:;">登录遇到问题？</a>
      </p>
      <p>—— 社交账号登录 ——</p>
      <div class="partner">
        <img src="../../assets/wechat.png" alt />
        <img src="../../assets/qq.png" alt />
        <img src="../../assets/changyonglogo29.png" alt />
      </div>
    </div>
    <div class="message_vc w-100">
    <div class=" offset-1 col-10 ">
      <p class="m-0 m-1">来自"信息"</p>
      <span>{{verification_code}}</span>
    </div>
    </div>
    <div class="input_number_trans" id="inputs">
      <div v-for="(val,index) of number" :key="index" class="num">
        <span :class="{jz:val==0}">{{(index>8)?val:(index+1)}}</span>
        <span>{{index==9?index="":val}}</span>
      </div>
      <div class="close_num_trans">
        <span>
          <img src="../../assets/huitui.png" alt />
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
Vue.directive("focus", {
  inserted(domElem) {
    //让当前元素自动获得焦点
    domElem.focus();
    //      DOM原生
  }
});
export default {
  data() {
    return {
      count_down: 60,
      phone: "",
      verification_code: "",
      verification: true,
      number: ["", "ABC", "EDF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ", 0]
    };
  },
  methods: {
    getvfc(e) {
      e.target.style.display = "none";
      e.target.nextElementSibling.style.display = "block";
      var timer = setInterval(() => {
        this.count_down -= 1;
      }, 1000);

      var url = "users/signin";
      var obj = { phone: this.phone };
      this.axios
        .get(url, { params: obj })
        .then(res => {
          this.verification_code = res.data.obj.verification_code;
          var message = document.getElementsByClassName("message_vc")[0]
          message.style.display="block"
          console.log(res);
        })
        .catch(err => {
          return;
        });
      setTimeout(() => {
        if (this.count_down <= 0) {
          clearInterval(timer);
          e.target.style.display = "block";
          e.target.nextElementSibling.style.display = "none";
        }
      }, 60000);
    },
    login() {
      var url = "/users/login";
      var obj = {
        phone: this.phone,
        verification_code: this.verification_code
      };
      this.axios.get(url, { params: obj }).then(res => {
        console.log(res);
        if (res.data.code == 1) {
          this.$toast("登录成功");
          // 跳转到主页
          this.$router.push('/index')
          return;
        } else {
          this.$toast("登录失败");
        }
      });
    }
  },
  watch: {
    phone() {
      var reg = /^1[3-9]\d{9}$/i;
      var phone = this.phone;
      var verification = document.getElementsByClassName("verification")[0];

      if (reg.test(phone)) {
        verification.style.display = "block";
      } else {
        verification.style.display = "none";
        verification.nextElementSibling.style.display = "none";
      }
    },
    verification_code() {
      var reg = /^\d{6}$/i;
      // this.verification_code = parseInt(this.verification_code);
      if (reg.test(this.verification_code)) {
        this.verification = false;
        var lb = document.getElementById("lb");
        lb.style.cssText = "background-color:#ff0033;color:#fff;";
        var message = document.getElementsByClassName("message_vc")[0]
        setTimeout(()=>{
          message.style.display="none"
        },2000)          
      }
    }
  }
};
</script>
<style scoped>
/* a标签去除默认样式 */
a {
  text-decoration: none;
  color: #0000cc;
}
/* 手机密码登录样式 */
.register .ppl {
  text-decoration: none;
  color: #969696;
  font-size: 1rem;
}
/* 标题样式 */
.register .title {
  margin-bottom: 3rem;
  color: #242424;
}
/* 注册页面样式 */
.register {
  margin-top: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #969696;
}
/* 页头样式 */
.register .header {
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}
/* 左箭头 返回 */
.register .header img {
  width: 2rem;
  height: 2rem;
}
/* 输入框样式 */
.register input {
  height: 3rem;
  font-size: 1.5rem;
  background: none;
  outline: none;
  border: none;
  padding: 0.3rem;
}
/* 手机号码和验证码输入框样式 */
.register .phone,
.register .password {
  height: 3rem;
  margin-left: 1rem;
  margin-right: 1rem;
  border-bottom: 0.1rem solid lightgrey;
  display: flex;
  position: relative;
  align-items: center;
}
/* 发送验证码 */
.register .verification {
  position: absolute;
  right: 1rem;
  border: 0;
  color: blue;
  background-color: #fff;
  display: none;
}
/* 倒计时 */
.register .count_down {
  position: absolute;
  right: 1rem;
  display: none;
}
/* 地理位置+86 */
.register .area {
  display: flex;
  align-items: center;
  font-size: 2rem;
  color: lightgrey;
}
/* 注册协议栏 */
.register .protocaol {
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
  font-size: 1rem;
}
/* 登录按钮 */
.register .login-btn {
  border-radius: 2rem;
  height: 3rem;
  line-height: 3rem;
  margin-bottom: 3rem;
  /* color:#fff; */
}
.register .login {
  border-radius: 2rem;
  height: 3rem;
  line-height: 3rem;
  margin-bottom: 3rem;
  color: #fff;
  background-color: #ff0033;
}
/* 合作伙伴 */
.register .partner {
  display: flex;
  justify-content: space-around;
}
.register .partner img {
  width: 2rem;
  height: 2rem;
}
/* 验证码信息自动输入 */
.register .message_vc {
  display: none;
  position: fixed;
  bottom:18rem;
  border-left: 1px solid lightblue;
  border-right: 1px solid lightblue;
  text-align: center;
  background-color: lightgray;
}
/* 手机号码输入框 */
 .input_number {
  height: 0;
  position: fixed;
  bottom: 0;
  background-color: lightgray;
  display: flex;
  justify-content: end;
}
/* 手机号码输入框过渡效果 */
 .input_number_trans {
  width: 100%;
  height: 15rem;
  position: fixed;
  bottom: 0;
  background-color: lightgray;
  display: flex; /*弹性布局 */
  justify-content: center; /*对齐方式以主轴结束为止为准 */
  transition: all 1s linear; /*过渡 */
  flex-wrap: wrap; /*换行 */
  margin: 0;
  padding: 0;
}
/* 数字按钮 */
 .num {
  background-color: #fff;
  color: #000;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 0.25rem;
  border-radius: 0.5rem;
  width: 30%;
  height: 3rem;
}
/**0按钮居中 */
.jz{
  line-height: 3rem;
}
 .num > span:first-child {
  font-size: 1rem;
}
.num > span:last-child {
  font-size: 0.5rem;
}
/* 按钮组 */
#inputs {
  margin: 0;
}
/* 回退输入号码 */
.close_num {
  position: absolute;
  bottom: 0.8rem;
  right: 0.9rem;
  text-align: center;
  width: 30%;
  height: 0;
}
/* 过渡效果 */
 .close_num_trans {
  position: absolute;
  bottom: 0;
  right: 0.9rem;
  text-align: center;
  width: 30%;
  transition: all 1s linear; /*过渡 */
  height: 4.28rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>