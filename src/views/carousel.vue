<template>
  <div class="Product">
    <headtitle></headtitle>
    <div class="carousel" :style="{width:wd}">
      <!-- 轮播图片 -->
      <div class="carousel-list" :style="ulStyle" :class="{transition:tran}">
        <div :style="{width:wd+'px'}" class="carousel-item" v-for="(item,i) of list" :key="i">
          <img :src="url+item.img" alt />
        </div>
        <div :style="{width:wd+'px'}" class="carousel-item">
          <img :src="url+list[0].img" alt />
        </div>
      </div>
      <!-- 点 -->
      <ul class="ul-list">
        <li class="li-dian" v-for="(d,i) of list" :key="i" :class="time==i?'active':''"></li>
      </ul>
    </div>
    <second></second>
    <third></third>
    <timelimit></timelimit>
    <recommend></recommend>
    <!-- 购物车跳转组件 -->
    <shopping-cart @click="toShoppingCart"></shopping-cart>
  </div>
</template>
<style scoped>

.carousel {
  overflow: hidden;
  margin: 5px;
  position: relative;
  border-radius: 5px;
}
.carousel > .carousel-list {
  list-style: none;
}
.carousel > .carousel-list::after {
  content: "";
  display: block;
  clear: both;
}
.carousel > .carousel-list > .carousel-item {
  display: block;
  float: left;
  border-radius: 40px;
}
.carousel > .carousel-list > .carousel-item > img {
  width: 100%;
}
.transition {
  transition: all 1s linear;
}
.carousel > .ul-list {
  list-style: none;
  position: absolute;
  top: 80%;
  left: 50%;
  margin-left: -75px;
}
.carousel > .ul-list > .li-dian {
  display: block;
  float: left;
  width: 10px;
  height: 10px;
  margin: 10px;
  background-color: #fff;
  border-radius: 50%;
}
.carousel > .ul-list > .li-dian.active {
  background-color: blue;
}
</style>
<script>
// 引入购物车图标组件
import ShoppingCart from './shopping_cart_icon';
import second from "./second";
import third from "./third";
import timelimit from "./TimeLimit";
import recommend from "./recommend";
import headtitle from "./headtitle";
export default {
  data() {
    return {
      url: "http://127.0.0.1:9527/",
      list: [{ img: "" }],
      wd: window.innerWidth,
      time: 0,
      tran: true
    };
  },
  methods: {
    // 购物车跳转
    toShoppingCart(){
      console.log(123)
      this.$router.push('/users/shopping')
    },
    moveto() {
      var t = setInterval(() => {
        this.time++;
        if (this.time == this.list.length) {
          setTimeout(() => {
            this.tran = false;
            this.time = 0;
            setTimeout(() => {
              this.tran = true;
            }, 50);
          }, 1000);
        }
      }, 3000);
    }
  },
  created() {
    this.moveto();
    window.addEventListener("resize", () => {
      this.wd = window.innerWidth;
    });
    this.axios.get("/product").then(res => {
      this.list = res.data.data;
    });
  },
  computed: {
    ulStyle() {
      var width = this.wd * (this.list.length + 1) + "px";
      var marginLeft = -this.time * this.wd + "px";
      return { width, marginLeft };
    }
  },
  components: {
    second,
    third,
    timelimit,
    recommend,
    headtitle,
    ShoppingCart//购物车图标（跳转）组件
  }
};
</script>

