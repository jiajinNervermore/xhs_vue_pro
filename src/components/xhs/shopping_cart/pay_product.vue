<template>
  <div class="product m-2">
    <ul class="list-unstyled m-2">
      <li>
        <img src="../../../assets/dianpu.png" alt />
        <span>谷雨官方旗舰店</span>
      </li>
      <li class="d-flex p-2 row no-gutters">
        <div class="col-4 text-center">
          <img src="../../../assets/75c3e526add87fdd.jpg" alt />
        </div>       
        <ul class="list-unstyled col-8">
          <li class="d-flex">
            <div class="product_desc">
            <span class="timer_shopping">限时购</span>
            <span class="mr-1">谷雨</span>
            <span class="mr-1">仙人掌舒缓保湿面膜</span>
            </div>
            <span class="count">x&nbsp;1</span>
          </li>
          <li>
            <span class="text-muted mr-1">16片/2盒</span>
            <span class="text-muted">粉绿各一盒</span>
          </li>
          <li>
            <span class="text-danger ">该商品已享受限时购，限购3件，不可使用薯券</span>
          </li>
          <li>
            <span>￥95</span>
          </li>
        </ul>
      </li>
      <li class="row no-gutters">
        <span class="col-3">配送方式</span>
        <span class="col-6 text-muted">快递</span>
        <span class="col-3">免运费</span>
      </li>
      <li class="d-flex justify-content-end">
        <span class="text-muted">共一件</span>
        <span class="mr-2 ml-2">小计 :</span>
        <span class="text-danger">￥409</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
/* 商品样式 */
/* 店铺图标 */
.product>ul>li:nth-child(1)>img{
  width:1.5rem;height: 1.5rem;
  margin-right: 0.5rem;
}
/* 商品图片 */
.product>ul>li:nth-child(2)>div>img{
  width:6rem;height: 6rem;
  border-radius: 0.3rem;
  /* margin-right: 0.2rem; */
}
/* 限时购 */
.timer_shopping{
  height: 1rem;
  background-color: #ff0033;
  color:#fff;
  border-radius: 0.2rem;
  font-size: 1rem;
  line-height: 0.9rem;
  padding: 0.1rem;
  margin-right:0.2rem;
}
/* 商品描述 */
.product_desc{
  /* 自动换行 */
  white-space: pre-wrap;
}
/* 商品数量 */
.count{
  width: 2rem;
}
</style>