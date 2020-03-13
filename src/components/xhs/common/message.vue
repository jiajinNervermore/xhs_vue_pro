<template>
   <!--一条消息组件Message.vue-->
    <div class="rootstyle">
        <!--左侧图片与标题-->
        <div class="leftimgtxt">
            <img :src="imgurl" class="imgstyle" />
            <div class="lefttitle">
               <span class="title">{{title}}</span>
               <span class="subtitle">{{subtitle}}</span>
            </div>
        </div>
        <!--右侧发送时间-->
        <span class="sendtime">{{sendtime}}</span>
    </div>
</template>
<script>
//接收父组件传递数据  imgurl;title;subtitle;sendtime
export default {
    props:{ //声明接收父组件传递数据
      imgurl:{default:""}, //左侧图片    默认值空字符串
      title:{default:""},//左侧标题      默认值空字符串
      subtitle:{default:""},//左侧子标题 默认值空字符串
      sendtime:{default:""}//发送时间    默认值空字符串
    }
}
</script>
<style scoped>
 /*1:一条消息元素元素*/
 .rootstyle{
     display: flex;/*弹性布局*/
     justify-content: space-between;/*子元素两端对齐*/
     align-items: center;/*子元素垂直居中*/
 }
 /*2:左侧图片与标题父元素*/
 .leftimgtxt{
     display: flex;/*子元素水平排列*/
 }
 /*3:左侧图片宽度和高度*/
 .imgstyle{
     width:50px;/*图片宽度和高度*/
     height:50px;
 }
 /*4:左侧标题与子标题父元素*/
 .lefttitle{
    display: flex;/*弹性布局*/
    flex-direction: column;/*子元素按钮列:排列*/
    justify-content: center;/*居中对齐*/
    margin-left:7px;/*标题与左侧图片7像素间距*/ 
 }
 /*5:左侧标题*/
 .title{
     color:#000;  /*标题颜色与大小*/
     font-size:17px;
 }
 /*6:左侧子标题*/
 .subtitle{
     color:gray;
     margin-top:4px;/*子标题上面标题间距*/
 }
 /*7:右侧发送时间*/
 .sendtime{
     color:gray;
 }
</style>