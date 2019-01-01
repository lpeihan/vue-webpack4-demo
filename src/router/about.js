export default [
  {
    path: '/about',
    name: 'about',
    beforeEnter(to, from, next) {
      console.log('about router hook', from.path, to.path);
      next();
    },
    component: () =>
      import(/* webpackChunkName: 'about' */ '@/views/about/about')
  }
];
