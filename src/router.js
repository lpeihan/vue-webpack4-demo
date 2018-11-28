import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/home/home';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user',
      name: 'user',
      component: () =>
        import(/* webpackChunkName: 'user' */ '@/views/user/user')
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: 'about' */ '@/views/about/about')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});

export default router;
