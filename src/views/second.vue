<template>
  <div class="second">
    <ul class="second-ul">
      <li class="second-li" v-for="(item,i) of list" :key="i">
        <img style="width:22%;" :src="item.src" alt="">
        <span>{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>
<style scoped>
  .second{
    padding:0px;
  }
  .second>.second-ul{
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
  .second>.second-ul>.second-li{
    display: inline-block;
    width: 100%;
    display: flex;
    padding:0 6px;
    justify-content: space-around;
    align-items: center;
    font-size: 13px;
    color: #333;
  }
  .second>.second-ul>.second-li:not(:first-child){
    border-left: 1px solid #ccc;
  }
</style>
<script>
export default {
  data(){
    return {
      list:[
        {src:require('../assets/shopping/second/diqiu.png'),title:'全球直采'},
        {src:require('../assets/shopping/second/zhengpinbaozheng.png'),title:'正品保证'},
        {src:require('../assets/shopping/second/shouhou.png'),title:'售后无忧'},
        {src:require('../assets/shopping/second/38.png'),title:'假一赔十'}
      ]
    }
  }
}
</script>