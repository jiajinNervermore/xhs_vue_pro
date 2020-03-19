<template>
  <div class="product">
    <ul class="list-unstyled d-flex flex-column">
      <li>
        <img class="w-100" src="../../assets/75c3e526add87fdd.jpg" alt="">
      </li>
      <li class="font-weight-bold">
        <span>日本</span>
        <span>·</span>
        <span>460倍夯补水</span>
      </li>
      <li>
        <span>Bb</span>
        <span>LABORATORIES</span>
      </li>
      <li>
        <p class="detail">复活草面膜胎盘素修复补水 复活草面膜175g</p>
      </li>
      <li>
        <span class="price">￥238</span>
        <span class="member-price">
          <span class="R">R</span>
          <span>￥218</span>
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.product{
  width:48%;
  height: 18rem;
  margin: 0.5rem 0.25rem;
  background-color: #f8f8ff;
  border-radius: 0.5rem;
}
.product::after{
  content: "";
  display: block;
  height: 5rem;
}
img{
  border-top-left-radius:0.5rem ;
  border-top-right-radius:0.5rem ;
}
.detail{
  white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.R{
  width: 1.5rem;height: 1.5rem;
  padding: 0.1rem 0.3rem;
 background-image:linear-gradient(to right,red,#ff6666);
 font-size: 1rem;
 border-radius: 0.1rem;
 color:#fff;
 margin:0 0.1rem;
}
</style>