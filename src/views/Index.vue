<template>
  <div>
       <div id="context">

          <div id="banner">
            <div class="banner">
                <!-- <a href="#">影院热评</a> -->
                <router-link to="/movie">影院热评</router-link>
                <router-link to="/music">华语新碟版</router-link>
                <router-link to="/time">豆瓣时间</router-link>
                <a href="#">使用豆瓣App</a>
                <!-- <router-link to="" tag="a">使用豆瓣App</router-link> -->

                <!-- <a href="#">豆瓣日历</a>
                <a href="#">豆瓣时间</a>
                <a href="#">使用豆瓣App</a> -->
              </div>
          </div>

        <div class="box" v-for="items in index"
       :key="items.id"
       >



      <div class="text"
      v-if=" items.content.photos.length === 0"
      >
        <div><h3>{{ items.content.title }}</h3></div>
        <div>{{ items.content.abstract }}</div>
        <div>by {{ items.content.author.name }}</div>
      </div>

      <div v-else-if="items.content.photos.length >= 3">
        <div class="warp">
            <div class="w_left"><img :src="img3" alt=""></div>
            <div class="w_right">
              <div><img :src="img2" alt=""></div>
              <div><img :src="img1" alt=""></div>
            </div>
          </div>

          <div class="text">
            <div><h3>去长沙嗦粉吧！！</h3></div>
            <div>
              其实从头到尾只嗦了一顿粉，有点标题欺诈了哈哈。不过我们真的超努力，三天时间一天三顿一顿不落，生怕少吃一顿吃了天大的亏！这又是一次属于社畜三天小长假的吃吃吃之旅。这次依旧是提前了一个多月定的机票和airbnb，三天住宿+机票大概2000块，吃吃喝喝加起来满打满算花了三千块！性价比超高~·住的地方很推荐解放西路五一广场附近，四通八达的小路上密密麻麻遍布着小吃，太平古镇+坡子街+火宫殿+解放西路酒吧街，还有万达、海信和国金商场等等等等。吃完可购物，购物累了看电…
            </div>
            <div>by 大熊</div>
          </div>
      </div>

</div>
      </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return{
      img1:require('../images/index1.jpg'),
      img2:require('../images/index2.png'),
      img3:require('../images/about.jpg'),
      index: [],
    }
  },
  methods: {
    getIndex() {
      axios
        .get("/api/rexxar/api/v2/elendil/recommend_feed")
        .then(res => {
          let data = res.data;
          console.log(data);
          if (data.start === 0) {
            this.index = data.items;
            //console.log(this.index.content.photos);
          }
        });
    }

  },
  mounted() {
    this.getIndex();
  }
}
</script>





<style>
#context{
    padding:0 30px 0 30px;
    box-sizing: border-box;
    position: absolute;
    top:94px;
    bottom: 0;
    width:100%;
    overflow-y: auto;
    overflow-x: hidden;
    /* background: red; */
}


.banner{
  width:100%;
  height:302px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-between;
  align-items: center;
}

.banner a{
  display: block;
  width:328px;
  height:88px;
  background: #f6f6f6;
  color:#49494b;
  text-align: center;
  line-height: 88px;
  margin-bottom: 12px;
  font-size: 30px;
}

.warp{
  width:100%;
  height:auto;
  display:flex;
  margin-bottom: 20px;
}

.warp .w_left{
  width:570px;
  height:374px;
  background: #eee;
  margin-right: 16px;
}
.warp .w_left img{
  width:100%;
  height:100%;
  display: block;
}

.warp .w_right{
  width:178px;
  height:374px;
  /* background: #ccc; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;

}
.warp .w_right div{
    width:178px;
    height:178px;
    background:#eee;

}
.warp .w_right div img{
  width:100%;
  height:100%;
  display: block;
}




.text{
      width:100%;
      height:auto;
      color:#a7abac;
}
.text div:nth-child(1){
  font-size: 30px;
  font-weight: bolder;
  margin-bottom: 20px;
  color:#515151;
}

.text div:nth-child(2){
  width:100%;
  font-size: 26px;
  text-indent: 2em;
  display: -webkit-box;
  -webkit-line-clamp:5;
  -webkit-box-orient:vertical;
  overflow: hidden;
}
.text div:nth-child(3){
  color:#c7d2ce;
  font-size: 24px;
  margin-top: 34px;
  margin-bottom: 106px;
}
</style>

