<template>
    <div>
        <!--调用子组件 messagelist.vue-->
        <message
         class="itemstyle"
         v-for="(item,i) of rows"
         :key="i"
         :imgurl="require(`./../../../assets/`+item.img)"
         :title="item.title"
         :subtitle="item.subtitle"
         :sendtime="item.time"
        ></message>
    </div>
</template>
<script>
//引入子组件
import message from "./message.vue"
//引入json文件
import messagelistjson from "../json/messagelist.json"
export default {
data(){
    return { 
        rows:messagelistjson.data
   }
},
created(){
    console.log(this.rows);
},    
//注册子组件
components:{
    "message":message, //左侧标签名称:组件对象
}    
}
</script>
<style scoped>
  /*一条消息底部添加一条 灰色下划线  */
  .itemstyle{
     padding:5px;
     border-bottom:1px solid #d9d9d9; 
  }
</style>