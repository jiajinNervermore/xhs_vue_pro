<template>
  <div class="register">
    <h3>注册页面</h3>
    <div class="phone_login">
      <a href="javascript:;">
        <img src="../../assets/icon.png" alt />
      </a>
      <a  class="ppl">手机密码登录</a>
    </div>
    <div class="title"><h1>登录后更精彩</h1></div>

  </div>
</template>
<script>
export default {};
</script>
<style scoped>
/* 手机密码登录样式 */
.ppl {
  text-decoration: none;
  color: #969696;
  font-size: 25px;
}
/* 标题样式 */
.title{
  margin-bottom: 50px;
  
}
.register {
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;
}
.phone_login {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.phone_login img {
  width: 35px;
  height: 35px;
}
</style>