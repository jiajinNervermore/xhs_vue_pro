<template>
<div>
  <div class="head">
    <div class="other" @click="change">
      <img src="../assets/shopping/search/gengduo.png" alt="">
      <span class="font">分类</span>
    </div>
    <search></search>
    <div class="other">
      <img src="../assets/shopping/search/more.png" alt="">
      <span class="font">更多</span>
    </div>
  </div>
  <div class="mask-none" @click="cha" :class="{'d-none':dnone,mask:tran,mask2:tran2}"></div>
  <div class="others" :class="{others2:tran}">
    <div class="top">
      <span class="more">更多功能</span>
      <span @click="cha">×</span>
    </div>
    <div class="bottom">
      <ul class="others-ul">
        <li class="others-list" v-for="(item,i) of list" :key="i">
          <div class="others-item">
            <img :src="item.src" alt="">
            <span>{{item.title}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<style scoped>
  .others-ul{
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 10px;
  }
  .others-list{
    display: block;
    width: 24%;
    align-items: center;
    position: relative;
    margin-top: 4px;
  }
  .others-list:before{
    content: '';
    padding-top: 100%;
    box-sizing: border-box;   
    display: block;
    width: 0;  
  }
  .others-item{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 5px;
    font-size: 0.8rem;
  }
  .top>span:last-child{
    font-size: 30px;
  }
  .more{
    font-size: 18px;
    color: #333;
  }
  .top{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .others{
    padding: 20px;
    padding-top: 40px;
    position: absolute;
    z-index: 20;
    width: 100%;
    background: #ddd;
    height:280px;
    top:-280px;
    transition: all linear 0.5s;
  }
  .others2{
    top:0;
  }
  .d-none{display: none}
  .mask-none{
    width: 100%;
    position: absolute;
    margin-top: -50px;
    height:1000px;
    background: #000;
    opacity: 0;
    z-index: 10;
    height: 1000px;
  }
  .mask{
    opacity: 0.3;
    transition: all linear 0.2s;
  }
  .mask2{
    opacity: 0;
    transition: all linear 0.2s;
  }
  .other{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .font{
    font-size: 10px;
  }
  .head{
    display: flex;
    justify-content: space-between;
    position: relative;
    align-items: center;
    padding: 3px;
  }
  .head>div:nth-child(2){
    width: 80%;
  }
  .head>div:first-child{
    width: 10%;
  }
  .head>div:last-child{
    width: 10%;
  }
</style>

<script>
import search from './search'
export default {
  data(){
    return {
      dnone:true,
      tran:false,
      tran2:false,
      list:[
        {src:require('../assets/shopping/others/01.png'),title:"购物车"},
        {src:require('../assets/shopping/others/02.png'),title:"订单"},
        {src:require('../assets/shopping/others/03.png'),title:"卡券"},
        {src:require('../assets/shopping/others/04.png'),title:"心愿单"},
        {src:require('../assets/shopping/others/05.png'),title:"小红卡会员"},
        {src:require('../assets/shopping/others/06.png'),title:"客服"}
      ]
    }
  },
  methods:{
    change(){
      this.dnone=!this.dnone;
      setTimeout(()=>{
        this.tran=true;
        this.tran2=false;
      },10);
    },
    cha(){
      this.tran=false;
      this.tran2=true;
      setTimeout(()=>{
        this.dnone=!this.dnone;
      },300);
    }
  },
  components:{
    search
  }
}
</script>