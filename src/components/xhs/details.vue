<template>
  <div id="d1">
    <titleTar></titleTar>
    <baseTar class="c1"></baseTar>
    <body1></body1>
  </div>
</template>
<script>
import titleTar from './Child/titleTar.vue'
import baseTar from './Child/baseTar.vue'
import body1 from './Child/body.vue'
export default {
  data(){
    return {
      
    }
  },
  components:{
    titleTar,baseTar,body1
  }
}
</script>
<style>
 #d1{
   width: 100%;
   height: 40rem;
   padding-bottom: 60px;
 }
 #d1>.c1{
   position: fixed;
   bottom: 0;
 }
</style>
