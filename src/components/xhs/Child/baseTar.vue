<template>
   <div class="baseSire">
     <div class="one">
       <div class="oneq">
         <div class="onee"><img src="../../../assets/客服.png" alt="" width="25rem" height="20rem"></div>
         <div class="onew">客服</div>
       </div>
       <div class="oneq">
         <div class="onee"><img src="../../../assets/店铺.png" alt="" width="25rem" height="20rem"></div>
         <div class="onew">店铺</div>
       </div>
       <div class="oneq">
         <div class="onee"><img src="../../../assets/购物 车.png" alt="" width="25rem" height="20rem"></div>
         <div class="onew">购物车</div>
       </div>
     </div>
     <div class="too">加入购物车</div>
     <div class="three">
       <div class="threeq">券后购买</div>
       <div class="threew">券后￥176.9</div>
     </div>
   </div>
</template>
<script>
export default {
  
}
</script>
<style>
  .baseSire{
    
    width: 100%;
    display: flex;
    height: 50px;
  }
  .baseSire.c1{
    position:fixed;
    bottom: 0;
  }
  .baseSire .one{
    width: 40%;
    display: flex;
    justify-content:space-around;
    background-color: #fff;
  }
  .baseSire .too{
    width: 30%;
    text-align: center;
    line-height: 3rem;
    background-color: #ff7d8d;
    color: #f9eaec;
    font-size: 0.9rem;
  }
  .baseSire .three{
    width: 30%;
    text-align: center;
    background-color: #ff2742;
    color: #f2d1d5;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .baseSire .oneq{
    display: flex;
    flex-direction: column;
  }
  .baseSire .onew{
    padding-top: 0.2rem;
    text-align: center;
    color: #adadad;
  }
  .baseSire .onee{
    padding-top: 0.4rem;
  }
  .baseSire .threeq{
   font-size: 0.9rem;
   padding-bottom: 0.2rem;
  }
  .baseSire .threew{
  font-size: 0.7rem;
  padding-top: 0.2rem; 
  }
</style>
