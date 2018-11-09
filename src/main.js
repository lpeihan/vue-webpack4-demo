import Vue from 'vue';

import App from './app';
import router from './router';
import store from './store';
import axios from './utils/axios';

import './assets/styles/index.styl';
import icon from './components/icon';
import filters from './utils/filters';

Vue.config.productionTip = false;

Vue.prototype.$http = axios;

Vue.use(filters);
Vue.use(icon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
