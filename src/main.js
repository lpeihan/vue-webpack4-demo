import Vue from 'vue';

import App from './app';
import router from './router';
import store from './store';

import './assets/styles/index.styl';
import filters from './utils/filters';
import directives from './utils/directives';
import Icon from './components/icon';
import './utils/vconsole';

Vue.config.productionTip = false;
Vue.config.devtools = process.env.NODE_ENV === 'development';

Vue.use(filters);
Vue.use(directives);
Vue.use(Icon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

if (module.hot) {
  module.hot.accept();
}
