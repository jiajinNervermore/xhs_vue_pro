<template>
  <div class="title">
    <div class="too">
      <img class="css" src="../../../assets/返 回.png" alt width="23px" />
      <img class="cs" src="../../../assets/分享.png" alt width="23px" />
    </div>
    <div class="shi">1/3</div>
    <div></div>
    <div class="tone">
      <img :src="`${url}/${imgs}`" alt style="height:10rem;width:100%;" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: "http://127.0.0.1:9527",
      imgs: ""
    };
  },
  props:['lid'],
  methods: {
    // lom(){
    // }
  },
  created() {
    console.log(this.lid)
    var lid = parseInt(this.$route.params.lid);
    var obj = { lid };
    this.axios
      .get("/details",{params:obj})
      .then(res => {
        this.imgs = res.data[0].details_pic;
        console.log(this.imgs);
      })
      .catch(err => {
        //  console.log(err);
      });
  }
};
</script>
<style scoped>
*{margin: 0;padding: 0;}

.tone::before{
  content:"";
  display: block;
  height:4rem;
}
/**商品图片 */
.tone{
  width:100%;
}
.too {
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0%;
  left: 2.3%;
}
.three {
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 3%;
  left: 87%;
}
.cs {
  margin-top: 5px;
}
.css {
  margin-top: 7px;
  margin-left: -3.5px;
}
.shi {
  font-size: 1rem;
  position: absolute;
  left: 90%;
  top: 90%;
}
</style>
