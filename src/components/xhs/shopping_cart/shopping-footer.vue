<template>
  <div class="footer">
    <!-- <img
      :src="require(`../../../assets/${item.is_checked ? 'gouSolid-copy.png' : 'yuanquan.png'}`)"
      @click="choose(i)"
      class="ml-2"
    /> -->
    <div>{{list}}</div>
  </div>
</template>
<script>
export default {
  data(){
    return {}
  },
  created(){
    // this.bus.$on("product-list",this.add.bind(this))
    console.log(1)
  },
  methods: {
    // choose(i){console.log(i)}
  },
};
</script>
<style scoped>
</style>