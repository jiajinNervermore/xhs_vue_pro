<template>
  <div class="con">
    <ul>
      <li @click="changeActive(i)" :class="{active:l.isActive}" v-for="(l,i) of list" :key="i">{{l.title}}</li>
    </ul>
  </div>
</template>
<style scoped>
  .con{
    padding: 8px;
  }
  ul{
    position: relative;
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
  ul>li{
    text-align: center;
    display: block;
    color: #999;
    font-size: 18px;
    width: 16.666%;
    padding: 4px;
  }
  .active{
    color: black;
    font-weight:bolder;
    position: relative;
    border-bottom: 3px solid red;
  }
</style>
<script>
export default {
  data(){
    return {
      list:[
        {title:"推荐",isActive:true},
        {title:"女神",isActive:false},
        {title:"护肤",isActive:false},
        {title:"彩妆",isActive:false},
        {title:"个护",isActive:false},
        {title:"保健",isActive:false},
      ],
    }
  },
  methods:{
    changeActive(i){
      for(var item of this.list){
        item.isActive=false;
      }
      this.list[i].isActive=true;
    }
  }
}
</script>