import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Cookie from 'js-cookie';

const files = require.context('.', true, /\.js$/);

export const langs = {
  zh: 'zh-CN',
  en: 'en-US'
};

const locales = {};

files.keys().forEach((key) => {
  if (key === './index.js') {
    return;
  }
  locales[key.replace(/(\.\/|\.js)/g, '')] = files(key).default;
});

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: Cookie.get('lang') || langs.zh,
  messages: locales
});

export default i18n;
