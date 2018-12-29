<template>
  <div class="locale">
    <van-button>{{ $t("message.hello") }}</van-button>
    <van-button @click="switchLang()">切换</van-button>
  </div>
</template>

<script>
import { langs } from '@/locales';
import Cookie from 'js-cookie';

export default {
  methods: {
    switchLang() {
      let lang = this.$i18n.locale;

      this.$i18n.locale = lang === langs.zh ? langs.en : langs.zh;
      Cookie.set('lang', this.$i18n.locale);
    }
  }
};
</script>
