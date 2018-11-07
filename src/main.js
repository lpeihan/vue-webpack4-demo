import Vue from 'vue';

import App from './app';
import './assets/styles/index.css';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
