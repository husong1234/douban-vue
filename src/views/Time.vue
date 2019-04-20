<template>
  <div id="context">
    <Banner></Banner>

    <div class="navlist">
      <router-link v-for="item in images" :key="item.name" :to="item.href">
        <img :src="item.imgUrl" alt>
        <span>{{ item.name }}</span>
      </router-link>
    </div>

    <div class="box">
      <div class="boxlist" v-for="item in navList" :key="item.column_id">
        <div>
          <h3>{{ item.title }}</h3>
        </div>

        <div class="boxlist2" v-if="item.type === 'column'">
          <a href="#" class="boxlista">
            <div class="imga">
              <img :src="item.profile_cover_url" alt>
            </div>
            <div class="boxlist3">
              <div class="list">
                <div class="list1">{{ item.column_title }}</div>
                <div class="list2">
                  <span>{{ item.discount_price }}.00元</span>
                  <br>
                  <span>{{ item.price }}.00元</span>
                </div>
              </div>

              <div class="list3">主讲人 {{ item.authors[0].name }}</div>
              <div class="list4">{{ item.short_intro }}</div>
            </div>
          </a>
        </div>

        <div class="boxlist2" v-if="item.type === 'collection'">
          <a href="#" class="boxlista" v-for="info in item.items" :key="info.begin_count">
            <div class="imga">
              <img :src="info.cover_url" alt>
            </div>
            <div class="boxlist3">
              <div class="list">
                <div class="list1">{{ info.title }}</div>
                <div class="list2">
                  <span v-if="info.discount_price">{{ info.discount_price }}元</span>
                  <br>
                  <span v-if="info.price">{{ info.price }}元</span>
                </div>
              </div>

              <div class="list3">主讲人 {{ info.authors[0].name }}</div>
              <div class="list4">{{ info.short_intro }}</div>
            </div>
          </a>
        </div>
        <div class="boxlist2" v-if="item.type === 'package'">
          <a href="#" class="boxlista">
            <div class="imga">
              <img :src="item.cover_url" alt>
            </div>
            <div class="boxlist3">
              <div class="list">
                <div class="list1">{{ item.package_title }}</div>
                <div class="list2">
                  <span>{{ item.bulk_price }}.00元</span>
                  <br>
                  <span>{{ item.price }}.00元</span>
                </div>
              </div>

              <div class="list3">{{ item.intro }}</div>
              <div class="list4">{{ item.short_intro }}</div>
            </div>
          </a>
        </div>

        <div class="boxlist2" v-if="item.type === 'ad'">
          <a href="#">
              <img class="images" :src="item.items[0].cover_url" alt>
          </a>
        </div>

        <div class="boxlist2 box_wrap" v-if="item.type === 'topic'">
          <a href="#" class="time" v-for="imgUrl in item.items"
          :key="imgUrl.cover_url">
            <img class="dbtime" :src="imgUrl.cover_url" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner";
import axios from "axios";
export default {
  data() {
    return {
      navList: [],
      images: [
        {
          name: "青椒学院",
          imgUrl: require("../images/b1.jpg"),
          href: "/school"
        },
        {
          name: "时间发现",
          imgUrl: require("../images/b2.jpg"),
          href: "/timeShow"
        },
        { name: "全部专栏", imgUrl: require("../images/b3.jpg"), href: "/all" },
        { name: "签到", imgUrl: require("../images/b4.jpg"), href: "/sign" },
        { name: "我的", imgUrl: require("../images/b5.jpg"), href: "/my" }
      ]
    };
  },
  components: {
    Banner
  },
  methods: {
    getData() {
      axios.get("/rexxar/api/v2/niffler/modules").then(res => {
        let data = res.data;
        if (data.start === 0) {
          for (let i = 0; i < data.modules.length; i++) {
            if (i > 0) {
              this.navList.push(data.modules[i]);
            }
          }
        }
      });
    }
  },
  created() {
    this.getData();
  }
};
</script>


<style>
#context {
  width: 100%;
  position: absolute;
  top: 94px;
  margin-top: 24px;
  left: 0;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
}
.navlist {
  width: 100%;
  height: 242px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.navlist a {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.navlist a img {
  width: 88px;
  margin-bottom: 22px;
}

.navlist a span {
  font-size: 26px;
  color: #867e7b;
}

.box {
  padding: 0 30px 0 30px;
  box-sizing: border-box;
}

.boxlist {
  width: 100%;
  min-height: 300px;
  font-size: 24px;
}
.boxlist h3 {
  font-size: 38px;
  color: #000;
  font-weight: 700;
  margin-bottom: 20px;
}

.boxlista {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 62px;
}

.imga {
  margin-right: 30px;
}
.boxlist2 img {
  width: 200px;
  height: 200px;
  border-radius: 6px;
}
.box_wrap{
  display: flex;
  width: 100%;
  height: 220px;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  display: inline;
  float: left;
}
.time{
  display: inline-block;
  width: 480px;
  height: 240px;
  margin: 0 20px;
}
.dbtime{
  width:480px !important;
  height: 240px !important;
  overflow-x: auto;
}
.images{
  width: 100% !important;
  height: 100% !important;
  margin-right: 0 !important;
}
.boxlist3 {
  width: 538px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list div:nth-child(1) {
  width: 300px;
}

.list1 {
  font-size: 28px;
  color: #181818;
  font-weight: bolder;
}

.list2 span:nth-child(1) {
  color: #f17f27;
}

.list2 span:nth-of-type(2) {
  color: #c2cacd;
  text-decoration: line-through;
}

.list3 {
  font-size: 24px;
  color: #87856e;
}

.list4 {
  width: 450px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #78887d;
  line-height: 60px;
  font-size: 22px;
}
</style>
