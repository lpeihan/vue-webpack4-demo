<template>
  <div class="about">
    <h1 @click="$refs.popup.open()">{{name}}</h1>
    <popup ref="popup">123</popup>
    <div class="rank"></div>
    <div class="block"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Popup from '@/components/popup/popup';

export default {
  name: 'about',
  components: {
    Popup
  },
  computed: {
    ...mapGetters('about', ['name'])
  }
};
</script>

<style lang="stylus" scoped>
.about
  .rank
    size: 20px
    background-size: 100% 100%
    bg-image("~@/assets/imgs/rank")

  .block
    size: 200px
    position: relative
    border-1px()
</style>
