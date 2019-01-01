export default [
  {
    path: '/locale',
    name: 'locale',
    component: () =>
      import(/* webpackChunkName: 'locale' */ '@/views/locale/locale')
  }
];
