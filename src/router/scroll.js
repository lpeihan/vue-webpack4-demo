export default [
  {
    path: '/scroll',
    name: 'scroll',
    component: () => import(/* webpackChunkName: 'scroll' */ '@/views/scroll/scroll')
  }
];
