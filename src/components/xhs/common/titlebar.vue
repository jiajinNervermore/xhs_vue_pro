<template>
  <div class="page-head">
    <div class="top-pic">
      <div class="searchdiv" v-for="(item,index) of bottomTitle" :key="index">
        <!--上方图片-->
        <p><img :src="require(`../../../assets/${item.url}`)" style="width:25px;" /></p>
        <!--下方文字-->
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  return: {},
  props: {
    //声明接收父组件数据
    //下方文字
    bottomTitle: { default: "" }
  }
};
</script>
<style scoped>

.searchdiv {
  text-align: center;
}
/*1:外层父元素弹性布局*/
.page-head {
 padding: 1rem;
  background-color: #fff;
}
/*2:右侧元素弹性布局*/
.top-pic {
  display: flex;
  justify-content: space-between;
}
img{
    width:3rem;
    height: 2rem;
    
}
span{
    font-size: 14px;
    color:#000;
}
</style>