<template>
  <div class="title">
    <div class="too">
      <img class="css" src="../../../assets/返 回.png" alt width="23px" @click="backToStore"/>
       </div>
       <div class="three"> 
      <img class="cs" src="../../../assets/分享.png" alt width="23px" />
    </div>
    <div class="shi">1/3</div>
    <div></div>
    <div class="tone">
      <img :src="`${url}/${imgs}`" alt style="width:100%;" />
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      imgs: ""
    };
  },
  props:['lid'],
  computed: {
    ...mapState(['CartList','url'])
  },
  methods: {
    // 返回商城
    backToStore(){
      // this.bus.$emit('active',"shangcheng");
      this.$router.push('/index')
    },
   lom() {
      var lid = parseInt(this.$route.params.lid)
      var obj = {lid}
      this.axios
        .get("/details",{params:obj})
        .then(res => {
          this.data = res.data[0]; 
          console.log(this.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
   this.lom();
    var lid = parseInt(this.$route.params.lid);
    var obj = { lid };
    this.axios
      .get("/details",{params:obj})
      .then(res => {
        this.imgs = res.data[0].details_pic;
        console.log(this.imgs);
      })
      .catch(err => {
         console.log(err);
      });
      console.log(this.CartList)
  }
};
</script>
<style scoped>
*{margin: 0;padding: 0;}
   .title{
    width: 100%;
    position: relative;
  }
  .too{
    position: fixed;
   width: 40px;
   height: 40px;
   text-align: center;
   border-radius: 100%;
   background-color: rgba(0, 0, 0, 0.4);
   top: 3%;
   left: 2.3%;
  }
   .three{
    position: fixed;
   width: 40px;
   height: 40px;
   text-align: center;
   border-radius: 100%;
   background-color: rgba(0, 0, 0, 0.4);
   /* position: absolute; */
   top: 3%;
   left: 87%;
  }
  .cs{
    margin-top: 5px;
  }
  .css{
     margin-top: 7px;
    margin-left: -3.5px;
  }
  .shi{
    font-size: 1rem;
    position: absolute;
    top: 80%;
    left: 90%;}
</style>
