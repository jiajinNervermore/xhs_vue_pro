<template>
  <div class="cq" id="index_cq">
  <div class="herder"></div>
    <div class="main" v-for="(item,i) of list" :key="i">
      <img v-if="item.video" :src="url+item.video" alt="">
      <span>{{item.title}}</span>
      <div class="bottom">
        <div class="b-left">
          <img src="../assets/touxiang.png" alt="">
          <span>{{item.user}}</span>
        </div>
        <div class="b-right">
          <img src="../assets/didian.png" alt="">
          <span>{{item.locat}}KM</span>
        </div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>
<style scoped>
.cq{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.main{
  width: 48%;
  display: flex;
  background: #fff;
  flex-direction: column;
  align-items: center;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  margin-top: 5px;
}
.main>img{
  width: 100%;
}
.main>span{
  font-size: 16px;
  color: #000;
  font-weight:500;
  margin-top: 5px;
  padding-left: 3px;
  padding-right: 3px;
}
.main>.bottom{
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 5px;
  padding-left: 8px;
  padding-right: 8px;
}
.main>.bottom>.b-left,.main>.bottom>.b-right{
  display: flex;
  align-items: center;
}
.main>.bottom>.b-left>span,.main>.bottom>.b-right>span{
  font-size: 12px;
  color: #555;
  margin-left: 3px;
}
.main>.bottom>.b-left>span{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 4rem;
}
.main>.bottom>.b-left>img,.main>.bottom>.b-right>img{
  width: 20px;
}
</style>
<script>
export default {
  data(){
    return {
      url:"http://127.0.0.1:9527/",
      list:[]
    }
  },
  created(){
    this.axios.get("/index")
    .then(res=>{
      this.list=res.data;
    })
  }
}
</script>