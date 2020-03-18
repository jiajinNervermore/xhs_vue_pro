<template>
    <div>
       <!-- 
        接收几个参数:3个
        focused选中状态;true false
        seletcedImage; 选中图片
        normalImage    默认图片
        -->
        <!--h3>common/TabbarIcon.vue</h3-->
    <img :src="focused?selectedImage:normalImage" class="imgstyle"/>
    </div>
</template>
<script>
export default {
    props:{ //声明接收父组件数据
         //声明当前元素选中状态
         focused:false,
         //选中时显示图片
         selectedImage:{default:""},
         //默认时显示图片
         normalImage:{default:""}
    }
}
</script>
<style scoped>
 .imgstyle{
     width:30px;
     height:30px;
 }
</style>
