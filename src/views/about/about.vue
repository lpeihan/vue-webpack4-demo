<template>
  <div class="about">
    <h1 @click="$refs.popup.open()">{{name}}</h1>
    <popup ref="popup">123</popup>
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
