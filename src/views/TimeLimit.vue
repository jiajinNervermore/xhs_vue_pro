<template>
  <div style="background:#fff;margin:8px;" class="timelimit">
    <ul class="title">
      <li>
        <span class="xianshigou">限时购</span>
      </li>
      <li>
        <ul class="daojishi">
          <li>{{h}}</li>
          <li>:</li>
          <li>{{m}}</li>
          <li>:</li>
          <li>{{s}}</li>
        </ul>
      </li>
      <li style="margin-bottom:0;">
        <span class="fangyi">防疫商品 每日10点更新</span>
      </li>
    </ul>
    <ul>
      <li class="xianshi-second" v-for="(item,i) of list" :key="i">
        <div>
          <img :src="item.src" alt />
        </div>
        <span>¥{{item.price}}</span>
        <span class="oldp">¥{{item.oldprice}}</span>
      </li>
    </ul>
    <ul class="bottom">
      <li v-for="(item,i) of bottomlist" :key="i">
        <span class="title">{{item.title}}</span>
        <span class="subtitle">{{item.subtitle}}</span>
        <div>
          <div v-for="(s,i) of item.src" :key="i">
            <img :src="s.src" alt />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      h: 0,
      m: 0,
      s: 0,
      list: [
        {
          src: require("../assets/shopping/third/xianshi01.png"),
          oldprice: 218,
          price: 128
        },
        {
          src: require("../assets/shopping/third/xianshi02.png"),
          oldprice: 346,
          price: 198
        },
        {
          src: require("../assets/shopping/third/xianshi03.png"),
          oldprice: 266,
          price: 98
        },
        {
          src: require("../assets/shopping/third/xianshi04.png"),
          oldprice: 198,
          price: 108
        }
      ],
      bottomlist: [
        {
          title: "福利社",
          subtitle: "套装",
          src: [
            { src: require("../assets/shopping/third/xianshi05.png") },
            { src: require("../assets/shopping/third/xianshi06.png") }
          ]
        },
        {
          title: "精选品牌",
          subtitle: "AFS MALL",
          src: [
            { src: require("../assets/shopping/third/xianshi07.png") },
            { src: require("../assets/shopping/third/xianshi08.png") }
          ]
        }
      ]
    };
  },

  methods: {
    timelimit() {
      var oldtime = new Date().getTime();
      var newtime = new Date(`2020-3-20`).getTime();
      var t = newtime - oldtime;
      var h = parseInt((t / 1000 / 60 / 60) % 24);
      var m = parseInt((t / 1000 / 60) % 60);
      var s = parseInt((t / 1000) % 60);
      this.h = h > 9 ? h : "0" + h;
      this.m = m > 9 ? m : "0" + m;
      this.s = s > 9 ? s : "0" + s;
      setTimeout(this.timelimit, 1000);

    }
  },
  mounted() {
    this.timelimit();
  }
};
</script>
<style scoped>
/* 清除内边距 */
.timelimit ul{
  padding: 0 5px;
}
img {
  width: 100%;
}
ul {
  list-style: none;
  display: flex;
  align-items: center;
}
ul > li {
  display: block;
}
.title > li + li {
  margin-left: 10px;
}
ul > li.xianshi-second {
  width: 25%;
}
.xianshigou {
  font-size: 20px;
  font-weight: 600;
}
.daojishi {
  font-size: 16px;
}
.daojishi > li:nth-child(odd) {
  background: #000;
  color: #fff;
}
.fangyi {
  display: block;
  font-size: 15px;
  color: #333;
}
.oldp {
  text-decoration: line-through;
  color: #999;
  padding: 3px;
}
.xianshi-second {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bottom {
  display: flex;
  border-top: 1px solid #eee;
}
.bottom > li + li {
  border-left: 1px solid #eee;
}
.bottom > li {
  width: 50%;
  padding: 10px;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
}
.bottom > li > div {
  display: flex;
}
.bottom > li > div > div {
  width: 50%;
}
.bottom > li > span.title {
  font-size: 20px;
  font-weight: 600;
}
.bottom > li > span.subtitle {
  color: #666;
  font-size: 18px;
  font-weight: 400;
}
</style>

