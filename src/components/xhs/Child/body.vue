<template>
   <div class="bodyAll">
     <!-- 价格 -->
     <div class="bodyf">
        <div class="rep"></div>
        <div class="pic">{{data[0].price1}}</div>
        <sum bid="109.9" class="sum"></sum>
        <div class="bor">包邮</div>
        <div class="bor">包邮</div>
     </div>
     <!-- 官方产品 -->
     <div class="bodyg">
       <div class="b1"><img src="../../../assets/官方.png" alt="" width="25px"></div>
       <div class="b1">品牌旗舰店直营</div>
       <div class="b1" id="b1">.</div>
       <div class="b1">正品保证</div>
     </div>
     <!-- 产品名称 -->
     <div class="bodyh">
       <div class="h1">新草</div>
       <div class="h3">
           <div>{{data[0].title}}</div>
       </div>

       <!-- <div class="h2">50片装</div>
       <div class="h3">.</div>
       <div class="h2">口罩一次性使用过滤垫片</div> -->
       <div class="h4">
         <div><img src="../../../assets/心愿单.png" alt="" width="30px"></div>
         <div>心愿单</div>
       </div>
     </div>
     <!-- 发源地 -->
     <div class="bodyj">
       <div class="j1">品牌来自中国</div>
       <div class="j2">领航奉献</div>
     </div>
     <!-- 灰色背景 -->
     <div class="back"></div>
     <!-- 服务条 -->
     <div class="bodyk">
       <div class="k0">服务</div>
       <div class="k1">
         <div><img src="../../../assets/gou1.jpg" alt="" width="20px"><span class="k3">7天保价</span></div>
         <div class="k2">
           <div>领航奉献旗舰店发货</div>
           <div><div class="k4">.</div></div>
           <div>单件包邮</div>
           <div><div class="k4">.</div></div>
           <div>包税</div>
           <div><div class="k4">.</div></div>
           <div>7天无理由退款</div>
        </div>
       </div>
       <div class="k5"><img src="../../../assets/进入.png" alt="" width="25px"></div>
     </div>
      <!-- 灰色背景 -->
     <div class="back"></div>
     <!-- 参数 -->
     <div class="bodyl">
       <div class="l1">参数</div>
       <div class="l2">品牌</div>
       <div class="l2">抽数...</div>
       <div class="l3"><img src="../../../assets/进入.png" alt="" width="25px"></div>
     </div>
      <!-- 灰色背景 -->
     <div class="back"></div>
     <div class="bodym"><img src="../../../assets/lkzcjp.jpg" alt="" width="100%"></div>
   </div>
</template>
<script>
import sum from './sum.vue'
export default {
  data(){
    return {
       data:[]
    }
  },
  methods:{
    lom(){
       this.axios.get("/details").then(res=>{
     this.data = res.data;
     console.log(this.data)
    }).catch(err=>{
       console.log(err);
    })
    }
  },
  created(){
    this.lom();
  },
  components:{
    sum
  }
}
</script>
<style>
  .bodyAll .bodyf{
    width: 100%;
    display: flex;
    padding:0.5rem 0;
  }
  .bodyAll .bodyf .pic{
    font-size: 1.5rem;
    font-weight: bolder;
    color: red;
    line-height: 1.5rem;
  }
  .bodyAll .bodyf .bor{
    border: 1px solid red;
    color: red;
    text-align: center;
    height: 20px;
    line-height: 20px;
    border-radius: 4px;
    margin-left: 10px;
  }
  .bodyAll .bodyf .rep{
    width: 13px;
  }
  .bodyAll .sum{
    /* margin-top: -1rem; */
    margin-left: 0.2rem;
  }
  .bodyAll .bodyg{
    width: 100%;
    display: flex;
    align-items: center;
  }
  .b1{
    margin-left: 12px;
    color: #c2c2c2;
    font-size: 0.8rem;
  }
  .b1#b1{
    padding-bottom: 4px;
    color: #c2c2c2;
    font-size: 0.8rem;
  }
  .bodyAll .bodyh{
    width: 100%;
    display: flex;
    align-items: center;
     padding-bottom:0.4rem;
  }
  .bodyAll .bodyh .h1{
    margin-left: 13px;
    border: 1px solid #b3cd87;
    width: 22px;
    height: 15px;
    text-align: center;
    line-height: 15px;
    color: #b3cd87;
  }
  .bodyAll .bodyh .h3{
    margin-left: 13px;
    padding-top: 8px;
    font-size: 13px;
    font-weight: bolder;
    padding-bottom: 8px;
    text-align: center;
  }
  .bodyAll .bodyh .h4{
    display: flex;
    flex-direction: column;
    margin-left: 3rem; 
  }
  .bodyAll .bodyj{
    width: 100%;
    display: flex;
    padding-bottom: 0.5rem;
  }
  .bodyAll .bodyj .j1{
    margin-left: 13px;
  }
  .bodyAll .bodyj .j2{
    margin-left: 12px;
    color: blue;
  }
  .bodyAll .back{
    width: 100%;
    height: 12px;
    background-color: #f4f8fb;
  }
  .bodyAll .bodyk{
    width: 100%;
    display: flex;
    margin-left: 13px;
    padding-top: 3px;
    align-items: center;
  }
  .bodyAll .bodyk .k1{
    display: flex;
    margin-left: 15px;
    flex-direction: column;
  }
  .bodyAll .bodyk .k0{
    font-size: 16px;
    color: #c2c2c2;
  }
  .bodyAll .bodyk .k2{
    display: flex;
    padding-top: 5px;
    padding-bottom: 12px;
  }
  .bodyAll .bodyk .k3{
    margin-left: 8px;
    font-size: 14px;
  }
  .bodyAll .bodyk .k4{
     margin-top: -2.5px;
     font-weight: bolder;
     padding: 0 5px;
  }
  .bodyAll .bodyk .k5{
    margin-left: 2rem;
  }
  .bodyAll .bodyl{
    width: 100%;
    display: flex;
    margin-left: 13px;
    padding: 11px 0;
  }
  .bodyAll .bodyl .l1{
    color: #c2c2c2;
    font-size: 16px;
  }
  .bodyAll .bodyl .l2{
    font-size: 15px;
    margin-left: 13px;
  }
  .bodyAll .bodyl .l3{
    margin-left: 12.75rem;
  }
  .bodyAll .bodym{
    width: 100%;
  }
</style>
