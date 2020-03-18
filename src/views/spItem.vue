<template>
  <div>
  <router-link :to="`/details/${i}`">
    <ul>
      <li>
        <img :src="url+item.details_pic" alt="">
      </li>
      <li><span>{{item.title}}</span></li>
      <li><span>{{item.subtitle}}</span></li>
      <li><span>¥{{item.price}}</span></li>
    </ul>
    </router-link>
  </div>
</template>
<script>
export default {
  data(){
    return {
      url:"http://127.0.0.1:9527/"
    }
  },
  props:["item","i"]
  
}
</script>
<style scoped>
  ul{
    list-style: none;
    background: #fff;
    display: flex;
    flex-direction: column;
    padding: 6px;
  }
  ul>li{
    display: block;
  }
  ul>li:first-child>img{
    width: 100%;
  }
  ul>li:nth-child(2){
    font-size: 16px;
    font-weight: 600;
  }
  ul>li:nth-child(3){
    margin-top: 3px;
    font-size: 14px;
    color: #333;
  }
  ul>li:nth-child(4)>span{
    color: red;
    font-size: 14px;
    font-weight: 600;
  }
</style>