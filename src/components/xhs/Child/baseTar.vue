<template>
  <div class="baseSire">
    <div class="one">
      <div class="oneq">
        <div class="onee">
          <img src="../../../assets/客服.png" alt width="25rem" height="20rem" />
        </div>
        <div class="onew">客服</div>
      </div>
      <div class="oneq">
        <div class="onee">
          <img src="../../../assets/店铺.png" alt width="25rem" height="20rem" />
        </div>
        <div class="onew">店铺</div>
      </div>
      <div class="oneq">
        <div class="onee">
          <img src="../../../assets/购物 车.png" alt width="25rem" height="20rem" />
        </div>
        <div class="onew">购物车</div>
      </div>
    </div>
    <div class="too" @click="da">加入购物车</div>
    <div class="three">
      <div class="threeq">券后购买</div>
      <div class="threew">券后￥176.9</div>
    </div>
    <mt-popup v-model="popupVisible" position="bottom">
      <div class="alter" :style="{width:innerWidth+'px'}">
        <div class="a1">
          <div class="al">
            <img :src="`${url}/${imgs}`" alt width="100px" />
          </div>
          <div>
            <div class="az">￥{{data.price}}</div>
            <div class="am">已选:x6 5片/一袋</div>
          </div>
        </div>
        <div class="a2">
          <div class="a22">组合数量</div>
          <div class="aone">
            <div class="a23">2</div>
            <div class="a24">6</div>
          </div>
        </div>
        <div class="a2">
          <div class="a22">款式</div>
          <div class="a25">5片/袋</div>
        </div>
        <div class="a4">
          <div class="c1">购买数量</div>
          <div class="c2">
            <div class="c3" @click="change(-1)">-</div>
            <div class="c4">{{count}}</div>
            <div class="c5" @click="change(+1)">+</div>
          </div>
        </div>
        <div class="a5" @click="addCart">确认加入</div>
      </div>
    </mt-popup>
  </div>
</template>
<script>
import { mapState,mapMutations } from "vuex";
export default {
  data() {
    return {
      count: 1,
      popupVisible: false,
      innerWidth: window.innerWidth,
      imgs: "",
      data: {}
    };
  },
  props: ["lid"],
  computed: {
    //获取vuex里面保存的购物车数据
    ...mapState(["CartList", "result",'url'])
  },
  created() {
    console.log(this.result.uid, this.lid);
    this.lom();
    window.addEventListener("resize", () => {
      this.innerWidth = window.innerWidth;
    });
    var lid = parseInt(this.$route.params.lid);
    var obj = { lid };
    this.axios
      .get("/details", { params: obj })
      .then(res => {
        this.imgs = res.data[0].details_pic;
      })
      .catch(err => {
        //  console.log(err);
      });
  },
  methods: {
    ...mapMutations(['setCartList']),
    //修改商品数量
    change(n) {
      this.count += n;
      if (this.count < 1) {
        this.count = 1;
        this.$toast("最少购买一件商品");
      }
    },
    //加入购物车,
    addCart() {
      let that = this
      var num = 0;
      //遍历购物车判断商品是否在购物车中，如果购物车有此商品，那么提示已经在购物车了，并且弹出提示框，问是否去购物车，如果没有就发送axios请求加入购物车
     that.CartList.map(item => {
        if (item.lid == that.lid) {
          num++;
        }
      });
      if (num == 0) {
        var obj = {
          product_id: that.lid,
          user_id: that.result.uid,
          count: that.count
        };
        //发送添加请求,只有用户登录的情况下才发送请求
        if (that.result.uid) {
          that.axios.get("/addcart", { params: obj }).then(res => {
            console.log(res);
            if (res.data.code == 1) {
              that.$toast("添加成功");
              that.$router.push("/index");
            } else {
              that.$toast("添加失败");
            }
          });
        } else {
          that.$toast("登录后才能加入购物车");
          that.messagebox
            .confirm("是否回到登录页面？")
            .then(action => {
              that.$router.push("/users/signin");
            })
            .catch(err => {
              return;
            });
        }
      } else {
        //如果购物车没有此商品则，将此商品添加到购物车表里
        this.$messagebox
          .confirm("此商品已经在购物车里了,是否去购物车结算?")
          .then(action => {
            this.$router.push("/users/shopping");
          })
          .catch(err => {
            return;
          });
      }
    },
    da() {
      this.popupVisible = true;
    },
    lom() {
      var lid = parseInt(this.$route.params.lid);
      var obj = { lid };
      this.axios
        .get("/details", { params: obj })
        .then(res => {
          this.data = res.data[0];
          console.log(this.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style>
.baseSire {
  width: 100%;
  display: flex;
  height: 50px;
  padding: 10px 0;
  background-color: #fff;
}
.baseSire .one {
  width: 40%;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
}
.baseSire .too {
  width: 30%;
  text-align: center;
  line-height: 3rem;
  background-color: #ff7d8d;
  color: #f9eaec;
  font-size: 0.9rem;
}
.baseSire .three {
  width: 30%;
  text-align: center;
  background-color: #ff2742;
  color: #f2d1d5;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.baseSire .oneq {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.baseSire .onew {
  /* padding-top: 0.2rem; */
  text-align: center;
  color: #adadad;
  /* padding-bottom: 5px; */
}
.baseSire .onee {
  padding-top: 0.4rem;
}
.baseSire .threeq {
  font-size: 0.9rem;
  padding-bottom: 0.2rem;
}
.baseSire .threew {
  font-size: 0.7rem;
  padding-top: 0.2rem;
}
.baseSire .alter {
  display: flex;
  flex-direction: column;
}
.baseSire .alter .a1 {
  width: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  border-bottom: 1px solid #fcfcfc;
}
.baseSire .alter .a1 .al {
  padding: 10px;
}
.baseSire .alter .a1 .az {
  color: red;
  padding-bottom: 4px;
}
.baseSire .alter .a1 .am {
  padding-top: 4px;
  font-size: 12px;
}
.baseSire .alter .a2,
.baseSire .alter .a3 {
  display: flex;
  flex-direction: column;
}
.baseSire .alter .a2 {
  border-bottom: 1px solid #fcfcfc;
}
.baseSire .alter .a2 .a22 {
  padding: 10px;
  font-size: 14px;
}
.baseSire .alter .a2 .aone {
  padding: 10px;
  display: flex;
}
.baseSire .alter .a2 .a23 {
  width: 60px;
  height: 25px;
  border: 1px solid #ccc;
  border-radius: 20px;
  text-align: center;
  line-height: 25px;
}
.baseSire .alter .a2 .a24 {
  width: 60px;
  height: 25px;
  border: 1px solid #ccc;
  border-radius: 20px;
  text-align: center;
  line-height: 25px;
  color: #ee7d8c;
  background: #fff6f7;
  margin-left: 30px;
}
.baseSire .alter .a2 .a25 {
  width: 60px;
  height: 25px;
  border: 1px solid #ccc;
  border-radius: 20px;
  text-align: center;
  line-height: 22px;
  margin-left: 10px;
  color: #ee7d8c;
  background-color: #fff6f7;
  font-size: 14px;
}
.baseSire .alter .a4 {
  display: flex;
  justify-content: space-between;
  padding: 20px 0 0 10px;
  margin-bottom: 150px;
}
.baseSire .alter .a4 .c2 {
  display: flex;
  align-items: center;
}
.baseSire .alter .a4 .c1 {
  font-size: 13px;
}
.baseSire .alter .a4 .c3,
.baseSire .alter .a4 .c5 {
  /* padding-right: 18px; */
  line-height: 18px;
  text-align: center;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: #f4f8fb;
}
.baseSire .alter .a4 .c5 {
  /* margin-left: 10px; */
  margin-right: 10px;
}
.baseSire .alter .a4 .c4 {
  padding: 0 15px;
}
.baseSire .alter .a5 {
  width: 100%;
  background-color: #ff2442;
  color: #fff;
  text-align: center;
  padding: 15px 0;
}
</style>
