<template>
    <div class="page-head">
      <!--下方文字-->
      <span>{{bottomTitle}}</span> 
      <!--上方图片-->
      <div class="top-pic">
         <div class="searchdiv">
             <img :src="FirstImg" style="width:25px;" />
         </div>
         <div class="searchdiv" style="margin-left:20px;">
             <img :src="SecondImg"
              style="width:25px;margin-right:15px;"/>
         </div>
         <div class="searchdiv" style="margin-left:20px;">
             <img :src="ThirdImg"
              style="width:25px;margin-right:15px;"/>
         </div>
      </div>
    </div>
</template>
<script>
export default {
    props:{ //声明接收父组件数据 
      //下方文字
      bottomTitle:{default:""},
      //上方图片
      FirstImg:{default:""},
      SecondImg:{default:""},
      ThirdImg:{default:""}
    }
}
</script>
<style scoped>
/*1:外层父元素弹性布局*/
.page-head{
   display: flex;/*指定布局方式:弹性布局*/
   position: fixed;/*固定定位*/
   z-index: 999;/*显示元素上方*/
   width: 100%;/*填满父无素*/
   justify-content: space-between;/*子元素两端对齐*/
   align-items: center;/*子元素垂直居中*/ 
   background-color:#ccc;
   padding-left:7px;/*内边距*/
   padding-right:7px;
   height:48px;/*元素高度*/
   color:#dddddd;
   font-size:18px;
}
/*2:右侧元素弹性布局*/
.top-pic{
    display: flex;
}
</style>