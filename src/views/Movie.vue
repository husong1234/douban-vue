<template>
  <section id="main">
    <h1>影院热映</h1>
    <ul class="movie">
      <router-link
      tag="li"
      v-for="item in movies"
      :key="item.id"
      :to="{
        name:'movies',
        params:{
          id:item.id
        }
      }"
      >
        <img :src="item.cover.url">
        <p>{{ item.title }}</p>
        <section class="remark" v-if="item.null_rating_reason">
          <b>{{ item.null_rating_reason }}</b>
        </section>
         <section class="remark" v-else :stars="flashStar(item)">
          <span class="star_active" v-for="xin in stars" :key="Math.random() + xin">★</span>
            <span class="star" v-for="toXin in toStars" :key="Math.random() + toXin">★</span>
          <b>{{ getGrade (item) }}</b>
        </section>
      </router-link>
    </ul>
  </section>
</template>

<script>
import axios from 'axios';
export default {
  data (){
    return {
      movies:[],
      stars:0,
      toStars:0,
      total:5
    }
  },
  methods:{
    getMovies () {
      axios.get('/api/rexxar/api/v2/subject_collection/movie_showing/items')
      .then(res => {
        let data = res.data;
        if(data.start === 0){
           this.movies = data.subject_collection_items;
        }
      })
    },
    getGrade (item) {
      let str = item.rating;
      let grade = str.value;
      return grade;
    },
     flashStar(item) {
      let starNum = Math.floor(this.getGrade(item) / 2);
      this.stars = starNum;
      this.toStars = this.total - starNum;
      return this.stars;
    }
  },
  mounted () {
    this.getMovies();
  }
}
</script>

<style lang="scss">
#main {
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
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        li {
            flex: 1 30%;
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
                b{
                  margin-left:10px;
                }
            }
            margin-bottom: 54px;
        }
    }
}
</style>
