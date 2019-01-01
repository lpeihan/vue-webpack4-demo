import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/home/home';

Vue.use(Router);

const files = require.context('.', true, /\.js$/);

let routes = [];

files.keys().forEach((key) => {
  if (key === './index.js') { return; }
  routes = routes.concat(files(key).default);
});

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ].concat(routes)
});

router.beforeEach((to, from, next) => {
  console.log('global router hooks', from.path, to.path);
  next();
});

export default router;
