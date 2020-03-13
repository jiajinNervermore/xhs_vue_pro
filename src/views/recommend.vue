<template>
  <div class="con">
    <ul>
      <li @click="changeActive(i)" :class="{active:l.isActive}" v-for="(l,i) of list" :key="i">{{l.title}}</li>
    </ul>
    <div class="spitem">
      <spitem class="product" v-for="(item,i) of items" :key="i" :item="item"></spitem>
    </div>
  </div>
</template>
<style scoped>
  .spitem{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .product{
    width: 48%;
    margin: 3px;
  }
  .con{
    padding: 8px;
    position: relative;
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
import spitem from './spItem'
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
      items:[]
    }
  },
  methods:{
    changeActive(i){
      for(var item of this.list){
        item.isActive=false;
      }
      this.list[i].isActive=true;
    }
  },
  components:{
    spitem
  },
  created(){
    this.axios.get("/item")
    .then(res=>{
      this.items=res.data.data;
    })
  }
}
</script>