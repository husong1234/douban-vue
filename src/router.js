import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/', component: () => import('./views/Home.vue'),
      children: [
        { path: 'movie', component:() => import('./views/Movie.vue')},
        { path: 'movie/:id', name:'movies', component:() => import('./views/MovieDetail.vue')},
        { path: 'music', component:() => import('./views/Music.vue')},
        { path:'music/:id', name:'musics', component:() => import('./views/MusicDetail.vue')}
      ],
    },
  ]
});
