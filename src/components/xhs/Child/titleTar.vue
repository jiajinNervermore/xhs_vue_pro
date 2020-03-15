<template>
    <div class="title">
      <div class="tone"><img :src="require(`../../../assets/${imags}`)" alt="" width="100%">
      </div>
      <div class="too"><img class="css" src="../../../assets/返 回.png" alt=""
        width="23px"></div>
      <div class="three"><img class="cs" src="../../../assets/分享.png" alt=""
        width="23px"></div>
      <div class="shi">1/3</div>
      <div></div>
    </div>
</template>
<script>
export default {
  data(){
    return {
     imags:""
    }
  },
  methods:{
    // lom(){
     
    // }
  },
  created(){
    // console.log(imags)
    
     this.axios.get("/details").then(res=>{
     this.imags = res.data[3].details_pic;
    console.log(res.data[3].details_pic);
    }).catch(err=>{
      //  console.log(err);
    })
  }
}
</script>
<style scoped>
  .title{
    width: 100%;
    position: relative;
  }
  .too{
   width: 40px;
   height: 40px;
   text-align: center;
   border-radius: 100%;
   background-color: rgba(0, 0, 0, 0.4);
   position: absolute;
   top: 3%;
   left: 2.3%;
  }
   .three{
   width: 40px;
   height: 40px;
   text-align: center;
   border-radius: 100%;
   background-color: rgba(0, 0, 0, 0.4);
   position: absolute;
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
    left: 90%;
    top: 90%;
  }
</style>
