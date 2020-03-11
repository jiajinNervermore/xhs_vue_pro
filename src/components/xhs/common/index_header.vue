<template>
  <div class="index_header">
    <top></top>
    <fake-search></fake-search>
    </div>  
</template>
<script>
import top from "./top";
import fakeSearch from "./fakesearch";
export default {
  components: {
    //指定标签名称:子组件对象
    top, //顶部标题子组件
    fakeSearch//假搜索框子组件
  }
}
</script>
<style scoped>

</style>