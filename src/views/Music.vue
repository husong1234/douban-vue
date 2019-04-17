<template>
  <section id="main">
    <ul>
      <router-link
      tag="li"
       :to="{
         name:'musics',
          params:{
            id:item.id
          }
        }" class="warp" v-for="item in musics" :key="item.id">
        <img :src="item.cover.url">
        <section class="info">
          <h3>{{ item.title }}</h3>
          <p :stars="flashStar(item)">
            <span class="star_active" v-for="xin in stars" :key="Math.random() + xin">★</span>
            <span class="star" v-for="toXin in toStars" :key="Math.random() + toXin">★</span>
            <b>{{ getGrade (item) }}</b>
          </p>
          <b>{{ item.info }}</b>
        </section>
      </router-link>
    </ul>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      musics: [],
      stars: 0,
      toStars: 0,
      total: 5,
    };
  },
  methods: {
    getMusic() {
      axios
        .get("/api/rexxar/api/v2/subject_collection/music_chinese/items")
        .then(res => {
          if (res.data.start === 0) {
            let data = res.data;
            this.musics = data.subject_collection_items;
            //console.log(data);
          }
        });
    },
    getGrade(item) {
      let str = item.rating;
      let grade = str.value.toFixed(1);
      return grade;
    },
    flashStar(item) {
      let starNum = Math.floor(this.getGrade(item) / 2);
      this.stars = starNum;
      this.toStars = this.total - starNum;
      return this.stars;
    }
  },
  created() {
    this.getMusic();
  }
};
</script>

<style lang="scss">
#main {
  ul {
    padding: 0 15px;
  }
  .warp {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    height: 284px;
    img {
      flex: 1 30%;
      width: 200px;
      height: 200px;
      margin-left: 44px;
    }
    .info {
      flex: 1 60%;
      margin-left: 30px;
      color: #000;
      h3 {
        font-size: 34px;
        font-weight: 700;
      }
      p {
        font-size: 24px;
        .star {
          color: #9b9b9b;
        }
        .star_active {
          color: #ffb712;
        }
      }
      b {
        font-size: 24px;
        color: #9b9b9b;
        margin-left: 10px;
      }
    }
  }
}
</style>
