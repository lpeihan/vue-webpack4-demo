import Vue from 'vue';

import App from './app';
import router from './router';
import store from './store';
import './assets/styles/index.css';

Vue.config.productionTip = false;
console.log(process.env);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
