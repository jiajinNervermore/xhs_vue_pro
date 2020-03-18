<template>
  <div id="d1">
    <titleTar :lid="lid"></titleTar>
    <baseTar class="c1"></baseTar>
    <body1 :lid="lid"></body1>
  </div>
</template> 
<script>
import titleTar from "./Child/titleTar.vue";
import baseTar from "./Child/baseTar.vue";
import body1 from "./Child/body.vue";
export default {
  data() {
    return {
      lid: 0
    };
  },
  created() {
    let lid = parseInt(this.$route.params.lid);
    this.lid = lid
    console.log(this.lid);
    console.log(lid);
  },
  components: {
    titleTar,
    baseTar,
    body1
  }
};
</script>
<style>
*{padding: 0;margin: 0;}
#d1 {
  width: 100%;
  height: 745px;
  overflow: hidden;
}
#d1 > .c1 {
  position: fixed;
  bottom: 0;
}
</style>
