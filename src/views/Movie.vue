<template>
  <section id="main">
    <h1>影院热映</h1>
    <ul class="movie">
      <li
      v-for="item in movies"
      :key="item.id"
      >
        <img :src="item.cover.url">
        <p>{{ item.title }}</p>
        <section class="remark" v-if="item.null_rating_reason">
          <b>{{ item.null_rating_reason }}</b>
        </section>
         <section class="remark" v-else>
          <span class="star">★</span>
          <span class="star">★</span>
          <span class="star">★</span>
          <span class="star">★</span>
          <span class="star">★</span>
          <b>{{ getGrade (item) }}</b>
        </section>
      </li>
    </ul>
  </section>
</template>

<script>
import axios from 'axios';
export default {
  data (){
    return {
      movies:[],
      pageNum:1,
      pageSize:17,
      total:10
    }
  },
  methods:{
    getMovies () {
      axios.get('/api/rexxar/api/v2/subject_collection/movie_showing/items')
      .then(res => {
        let data = res.data;
        if(data.start === 0){
           this.movies = data.subject_collection_items;
           //console.log(data.subject_collection_items);
        } else {
          alert('连接失败！');
        }
      })
    },
    getGrade (item) {
      let str = item.rating;
      let grade = str.value;
      //console.log(grade);
      return grade;
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
                .active{
                  background: #ffb712;
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
