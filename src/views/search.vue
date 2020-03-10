<template>
  <div style="position:relative;">
    <input type="text" :placeholder="place">
    <img src="../assets/shopping/search/search.png" alt="">
  </div>
</template>
<style scoped>
  input{
    width: 100%;
    height: 25px;
    padding-left: 30px;
    padding-right: 30px;
    border: 0;
    background: #ccc;
    border-radius: 13px;
  }
  img{
    position: absolute;
    z-index: 1;
    left: 0;
    top: 50%;
    margin-top: -10px;
    margin-left: 5px;
  }
  input:focus{
    outline: none;
  }
</style>
<script>
export default {
  data(){
    return {
      place:`大家都在搜:"预售销量排行榜"`
    }
  }
}
</script>