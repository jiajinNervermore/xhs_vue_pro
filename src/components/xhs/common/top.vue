<template>
  <div>
    <mt-tab-container v-model="active">
      <mt-tab-container-item id="guanzhu">
        <!-- <mt-cell v-for="n in 10" title="tab1"></mt-cell> -->
        guanzhu
      </mt-tab-container-item>
      <mt-tab-container-item id="faxiang">
        <!-- <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell> -->
        faxian
      </mt-tab-container-item>
      <mt-tab-container-item id="chongqing">
        <!-- <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell> -->
        congqing
      </mt-tab-container-item>
    </mt-tab-container>

    <mt-navbar v-model="active">
      <mt-tab-item id="guanzhu">关注</mt-tab-item>
      <mt-tab-item id="faxian">发现</mt-tab-item>
      <mt-tab-item id="zhongqing">重庆</mt-tab-item>
    </mt-navbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: "guanzhu"
    };
  }
};
</script>