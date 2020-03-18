<template>
  <div class="msgTitle">
    <div class="msgChild">
      <span>消息</span>
      <img src="../../../assets/xiao.png" alt />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.msgTitle {
  width:100%;
  text-align: right;
  height:3rem;
  background-color: #fff;
  position: fixed;
  top:0;
  line-height: 3rem;
  padding-right: 1rem;
}
.span{
  font-size: 1rem;
  font-weight: bold;
}
.msgChild{
  margin-left: 50%;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>