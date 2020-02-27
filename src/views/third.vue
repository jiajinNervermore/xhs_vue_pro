<template>
  <div class="third">
    <ul class="row">
      <li class="col-4 p-1" v-for="(img,i) of imgs" :key="i">
        <img class="w-100" :src="img.src" alt="" style="border-radius:8px;">
      </li>
    </ul>
    <div style="" class="forth">
      <div class="col-4 m-1"><img style="border-radius:5px;height:100%;" class="w-100" src="../assets/shopping/third/04.jpg" alt=""></div>
      <div class="col-8 m-1" style="background:#fff;border-radius:4px;">
        <h4 class="m-1">新人专享低价</h4>
        <ul class="hzp">
          <li class="hzp-li col-4" v-for="(item,i) of list" :key="i">
            <div class="img">
                <img class="w-100" :src="item.src" alt="">
                <span class="span">￥{{item.price}}</span>
            </div>
            <span style="font-size:10px;display:block">
              {{item.title}}
            </span>
          </li>        
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .w-100{width: 100%;}
  .m-1{margin:5px;}
  .p-1{padding:5px;}
  .third{
    padding: 3px;
    margin: 5px;
  }
  .third>.row{
    list-style: none;
    display: flex;
  }
  .col-4{
    width:33.3333333%;
  }
  .col-8{
    width:66.6666666%;
  }
  .third>.forth{
    display: flex;
    background:rgb(241, 212, 225);
    justify-content: space-around;
    border-radius: 4px;
  }
  .hzp{
    list-style: none;
    display: flex;
  }
  .hzp>.hzp-li{
    display: inline-block;
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  .hzp>.hzp-li>.img{
    width: 75%;
    margin: 0 auto;
    position: relative;
  }
  .span{
    display: inline-block;
    position: absolute;
    background:#f00;
    border-radius:10px;
    right: 0px;
    z-index: 10;
    font-size: 10px;
    padding: 2px 4px 2px 4px;
  }
</style>
<script>
export default {
  data(){
    return {
      list:[
        {src:require('../assets/shopping/third/l1.jpg'),price:'35',title:'狮王祛痘乳膏'},
        {src:require('../assets/shopping/third/l2.jpg'),price:'68',title:'碧柔水活防晒'},
        {src:require('../assets/shopping/third/l3.jpg'),price:'96',title:'Sesder身体乳'}
      ],
      imgs:[
        {src:require('../assets/shopping/third/01.png')},
        {src:require('../assets/shopping/third/02.png')},
        {src:require('../assets/shopping/third/03.png')}
      ]
    }
  },
}
</script>