import Vue from 'vue';

import App from './app';
import router from './router';
import store from './store';

import './assets/styles/index.styl';
import axios from './utils/axios';
import filters from './utils/filters';
import directives from './utils/directives';
import icon from './components/icon';

Vue.config.productionTip = false;
Vue.config.devtools = process.env.NODE_ENV === 'development';

Vue.prototype.$http = axios;

Vue.use(filters);
Vue.use(directives);
Vue.use(icon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
