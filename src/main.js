import Vue from 'vue';

import App from './app';
import router from './router';
import store from './store';
import axios from './utils/axios';

import './assets/styles/index.styl';

Vue.config.productionTip = false;

Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
