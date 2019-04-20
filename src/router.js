import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/', component: () => import('./views/Home.vue'),
      children: [
        { path: 'movie', component: () => import('./views/Movie.vue') },
        { path: 'movie/:id', name: 'moviedetail', component: () => import('./views/MovieDetail.vue') },
        { path: 'music', component: () => import('./views/Music.vue') },
        { path: 'music/:id', name: 'musicdetail', component: () => import('./views/MusicDetail.vue') },
        { path: 'time', component: () => import('./views/Time.vue') },
        { path: 'time/:id', name: 'timedetail', component: () => import('./views/TimeDetail.vue') },
        {
          path: 'my',
          component: () => import('./views/My.vue'),
          beforeEnter: (to, from, next) => {
            if (!window.isLogin) {
              next('/login');
            } else {
              next();
            }
          }
        },
        {
          path: 'sign',
          component: () => import('./views/Sign.vue'),
          beforeEnter: (to, from, next) => {
            if (!window.isLogin) {
              next('/login');
            } else {
              next();
            }
          }
        },
        { path: 'index', component: () => import('./views/Index.vue') },
        {path:'',redirect:'/index'}
      ],
    },
    { path: '/login', component: () => import('./views/Login.vue') }
  ]
});
