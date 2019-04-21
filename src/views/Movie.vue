<template>
  <section id="main">
    <h1>影院热映</h1>
    <ul class="movie">
      <router-link
        tag="li"
        v-for="item in movies"
        :key="item.id"
        :to="{
        name:'moviedetail',
        params:{
          id:item.id
        }
      }"
      >
        <img :src="img"/>
        <p>{{ item.title }}</p>
        <section class="remark" v-if="item.null_rating_reason">
          <b>{{ item.null_rating_reason }}</b>
        </section>
        <section class="remark" v-else>
          <span class="star_active" v-for="xin in flashStar(item, true)" :key="'active' + xin">★</span>
          <span class="star" v-for="toXin in flashStar(item)" :key="toXin">★</span>
          <b>{{ getGrade (item) }}</b>
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
      movies: [],
      total: 5,
      img:require('../images/movie.jpg')
    };
  },
  methods: {
    getMovies() {
      axios
        .get("/rexxar/api/v2/subject_collection/movie_showing/items")
        .then(res => {
          let data = res.data;
          if (data.start === 0) {
            this.movies = data.subject_collection_items;
          }
        });
    },
    getGrade(item) {
      let str = item.rating;
      let grade = str.value;
      return grade;
    },
    flashStar(item, type) {
      let starNum = Math.floor(this.getGrade(item) / 2);
      if (type) {
        return starNum;
      } else {
        return this.total - starNum;
      }
    }
  },
  mounted() {
    this.getMovies();
  }
};
</script>

<style lang="scss">
#main {
  width: 100%;
  position: absolute;
  top: 94px;
  left: 0;
  h1 {
    display: block;
    height: 132px;
    line-height: 132px;
    font-size: 46px;
    color: #000;
    margin-left: 44px;
  }
  .movie {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    li {
      width:248px;
      text-align: center;
      img {
        width: 182px;
        height: 262px;
      }
      p {
        font-size: 24px;
        line-height: 56px;
        color: #000;
      }
      .remark {
        font-size: 24px;
        .star {
          color: #9b9b9b;
        }
        .star_active {
          color: #ffb712;
        }
        b {
          margin-left: 10px;
        }
      }
      margin-bottom: 54px;
    }
  }
}
</style>
