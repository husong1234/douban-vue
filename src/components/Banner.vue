<template>
  <van-swipe :autoplay="3000" indicator-color="red">
    <van-swipe-item v-for="(item, index) in bannerList" :key="index">
      <img :src="item" style="width:100%;">
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import { Swipe, SwipeItem, Lazyload } from "vant";
Vue.use(Swipe)
  .use(SwipeItem)
  .use(Lazyload);
export default {
  data() {
    return {
      bannerList: []
    };
  },
  methods: {
    getBanner() {
      axios.get("/rexxar/api/v2/niffler/modules").then(res => {
        let data = res.data;
        if (data.start === 0) {
          var banners = data.modules[0].items;
          for (let i = 0; i < banners.length; i++) {
            this.bannerList.push(banners[i].cover_url);
          }
        }
        //console.log(this.bannerList);
      });
    }
  },
  created() {
    this.getBanner();
  }
};
</script>

<style>
.van-swipe {
  position: relative;
}
.van-swipe__track {
  height: 330px;
}
.van-swipe-item {
  float: left;
}
.van-swipe-item img{
  border-radius: 20px;
  transform: scale(.9);
}
.van-swipe__indicators {
  position: absolute;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);
  height: 10px;
}
i.van-swipe__indicator {
  display: block;
  float: left;
  margin: 10px;
  border-radius: 100%;
  width: 10px;
  height: 10px;
  background-color: #fff;
}
</style>

