<template>
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
      <input type="text" placeholder="输入手机号码" v-model="phone" maxlength="11" />
    </div>
    <div class="password">
      <input type="password" placeholder="输入验证码" maxlength="6" v-model="verification_code" />
      <button class="verification" @click="getvfc">获取验证码</button>
      <span class="count_down">重新发送{{count_down}}s</span>
    </div>
    <div class="protocaol">
      <span>登录注册代表同意</span>
      <a href="javascript:;">用户协议、隐私政策</a>
    </div>
    <mt-button id="lb" class="login-btn" :disabled="verification" size="large" @click="login">同意协议并登录</mt-button>
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
</template>
<script>
export default {
  data() {
    return {
      count_down: 60,
      phone: "",
      verification_code: "",
      verification: true
    };
  },
  methods: {
    getvfc(e) {
      e.target.style.display = "none";
      e.target.nextElementSibling.style.display = "block";
      var timer = setInterval(() => {
        this.count_down -= 1;
      }, 1000);
      var verification = "";
      for (var i = 0; i < 6; i++) {
        verification += Math.floor(Math.random() * 10);
      }
      var url = "users/signin";
      var obj = { verification_code: verification, phone: this.phone };
      this.axios
        .get(url, { params: obj })
        .then(res => console.log(res))
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
    login(){
      var url = "/users/login"
      var obj = {phone:this.phone,verification_code:this.verification_code}
      this.axios.get(url,{params:obj}).then(res=>{
        console.log(res)
        if(res.data.code==1){
          this.$toast("登录成功")
          return
        }else{
          this.$toast("登录失败")
        }
      })
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
        var lb = document.getElementById("lb")
        lb.style.cssText="background-color:#ff0033;color:#fff;"
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
.ppl {
  text-decoration: none;
  color: #969696;
  font-size: 1rem;
}
/* 标题样式 */
.title {
  margin-bottom: 3rem;
  color: #242424;
}
/* 注册页面样式 */
.register {
  margin-top: 1rem;
  margin-left: 2rem;
  margin-right: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #969696;
}
/* 页头样式 */
.header {
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* 左箭头 返回 */
.header img {
  width: 2rem;
  height: 2rem;
}
/* 输入框样式 */
input {
  height: 3rem;
  font-size: 1.5rem;
  background: none;
  outline: none;
  border: none;
  padding: 0.3rem;
}
/* 手机号码和验证码输入框样式 */
.phone,
.password {
  height: 3rem;
  margin-left: 1rem;
  margin-right: 1rem;
  border-bottom: 0.1rem solid lightgrey;
  display: flex;
  position: relative;
  align-items: center;
}
/* 发送验证码 */
.verification {
  position: absolute;
  right: 1rem;
  border: 0;
  color: blue;
  background-color: #fff;
  display: none;
}
/* 倒计时 */
.count_down {
  position: absolute;
  right: 1rem;
  display: none;
}
/* 地理位置+86 */
.area {
  display: flex;
  align-items: center;
  font-size: 2rem;
  color: lightgrey;
}
/* 注册协议栏 */
.protocaol {
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
  font-size: 1rem;
}
/* 登录按钮 */
.login-btn {
  border-radius: 2rem;
  height: 3rem;
  line-height: 3rem;
  margin-bottom: 3rem;
  /* color:#fff; */
}
.login {
  border-radius: 2rem;
  height: 3rem;
  line-height: 3rem;
  margin-bottom: 3rem;
  color: #fff;
  background-color: #ff0033;
}
/* 合作伙伴 */
.partner {
  display: flex;
  justify-content: space-around;
}
.partner img {
  width: 2rem;
  height: 2rem;
}
</style>