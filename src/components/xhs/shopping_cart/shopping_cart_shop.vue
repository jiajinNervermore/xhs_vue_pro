<template>
  <div class="shop">
    <div class="header">
      <!-- 返回按钮 -->
      <a href="javascript:;" class="mr-5 ml-1" @click="backToStore">
        <img src="../../../assets/icon.png" alt />
      </a>
      <h3 class="ml-4 mr-5">购物车</h3>
      <span class="manage ml-3">管理</span>
    </div>
    <div class="header_down"></div>

    <div class="platform">
      <div>
        <span class="plat mr-2">平台券</span>
        <span>还差99元减20元</span>
      </div>
      <a href class="mr-1 luck">
        去凑单
        <img src="../../../assets/icon-r.png" alt />
      </a>
    </div>
    <div class="goodsAll">
      <div class="goods" v-for="(item,i) of list" :key="i">
        <div class="shop_name">
          <div>
            <img
              class="ml-2"
              :src="require(`../../../assets/${item.is_checked ? 'gouSolid-copy.png' : 'yuanquan.png'}`)"
              @click="choose(i)"
            />
            <a href="javascript:;">
              <img class="store_icon mr-1 ml-1" src="../../../assets/dianpu.png" alt />
              <span>{{item.store}}</span>
            </a>
          </div>
          <span class="discounts">领券</span>
        </div>
        <div class="store_activity">
          <div class="ml-5">
            <span class="cross_store mr-2">跨店每满减</span>
            <span>{{item.is_activity?item.special_offer:""}}</span>
          </div>
          <a href="javascript:;" class="luck">
            去凑单
            <img src="../../../assets/icon-r.png" alt />
          </a>
        </div>
        <div class="describe">
          <img
            :src="require(`../../../assets/${item.is_checked ? 'gouSolid-copy.png' : 'yuanquan.png'}`)"
            @click="choose(i)"
            class="ml-2"
          />
          <div class="desc">
            <a href="javascript:;">
              <img :src="require(`../../../../public/img/e61865991d0c4e19.jpg`)" alt />
            </a>
          </div>
          <div class="product-details">
            <p>{{item.store}}</p>
            <p>{{item.detail}}</p>
            <p>{{item.capacity}}</p>
            <div class="d-flex justify-content-around">
              <span class="text-danger">￥{{item.price}}</span>
              <button @click="change(-1,i)">-</button>
              <span>{{item.count}}</span>
              <button @click="change(1,i)">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["list"],
  data() {
    return {};
  },
  methods: {
    // 返回商城
    backToStore(){
      this.$router.push('/index')
    },
    choose(i) {
      this.list[i].is_checked = !this.list[i].is_checked;
      // this.bus.$emit("product-list", this.list);     
    },
    change(n, i) {
      if (this.list[i].count == 1 && n == -1) {
        this.$toast("最少购买一件商品哦");
        return;
      } else {
        this.list[i].count += n;
      }
    }
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: #000;
}
.shop {
  display: flex;
  flex-direction: column;
}
/* 页头 */
.shop > .header {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  height: 4rem;
  width: 100%;
}
/* 解决页头脱离文档六留下的空白 */
.header_down {
  height: 7rem;
}
/* 平台活动 */
.platform {
  position: fixed;
  top: 4rem;
  display: flex;
  justify-content: space-between;
  background: #ffe4c4;
  height: 3rem;
  align-items: center;
  padding: 0 1rem;
  width: 100%;
}
/* 平台券 */
.discounts {
  color: #ff0033;
  width: 3.5rem;
  height: 1.5rem;
  border: 1px solid #ff0033;
  border-radius: 1rem;
  text-align: center;
  /* padding:0.1rem; */
  line-height: 1.5rem;
}
.plat {
  background-color: #fff;
  border: 1px solid #ff0033;
  padding: 2px;
  width: 2rem;
  height: 1rem;
  font-size: 0.4rem;
  color: #ff0033;
}
/* 优惠券 */
/* 凑单*/
.luck {
  color: #ff0033;
  line-height: 1rem;
}
/* 店铺 */
.shop_name {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3rem;
}
/* 店铺图标 */
.store_icon {
  width: 1.5rem;
  height: 1.5rem;
}
/* 跨店满减 */
.cross_store {
  background-color: #ff0033;
  font-size: 0.6rem;
  padding: 0.1rem;
  color: #fff;
  height: 1rem;
  margin-top: 1rem;
}
/* 店铺活动 */
.store_activity {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
/* 所有商品 */
.goodsAll {
  background-color: #fff;
}
/* 商品列表 */
.goods {
  margin: 1rem;
  background-color: #ffefd5;
}
/* 商品 */
.describe {
  display: flex;
  justify-content: space-between;
  height: 7rem;
  align-items: center;
}
.describe > img {
  height: 2rem;
  width: 2rem;
}
.describe > .desc img {
  width: 6rem;
  height: 6rem;
}
/* 商品详情 */
.product-details {
  width: 10rem;
}
.product-details > p {
  margin: 0;
}
/* 加减按钮 */
.product-details button {
  width: 1.5rem;
  height: 1.5rem;
  padding: 0;
  font-size: 1rem;
  background-color: #f5f5f5;
  border: 0;
}
</style>