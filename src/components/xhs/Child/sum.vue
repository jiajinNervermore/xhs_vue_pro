<template>
  <div class="line">
    <div class="lines"></div>
    <span class="pic">￥{{bid}}</span>
  </div>  
</template>
<script>
export default {
  props:["bid"]
}
</script>
<style scoped>
  .line{
    position: relative !important;
  }
  .lines{
    position: absolute !important  ;
    top: 0.25rem !important  ;
    margin-top: 0.4rem !important  ;
    border-bottom: 0.1rem solid black !important  ;
    width: 3.4rem !important  ;
  }
  .pic{
    width: 6rem !important  ;
    height: 2rem !important  ;
    font-size: 0.9rem !important  ;
    font-weight:normal !important;
    color: black !important;
  }
</style>
