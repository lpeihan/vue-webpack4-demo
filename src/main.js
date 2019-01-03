import Vue from 'vue';
import Clipboard from 'vue-clipboard2';

import 'amfe-flexible';
import App from './app';
import router from './router';
import store from './store';

import './assets/styles/index.styl';
import filters from './utils/filters';
import directives from './utils/directives';
import Icon from './components/icon';
import './utils/vconsole';
import Vant from './vant';
import i18n from './locales';

Vue.config.productionTip = false;
Vue.config.devtools = process.env.NODE_ENV === 'development';

Vue.use(filters);
Vue.use(directives);

Vue.use(Clipboard);
Vue.use(Vant);
Vue.use(Icon);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');

if (module.hot) {
  module.hot.accept();
}
