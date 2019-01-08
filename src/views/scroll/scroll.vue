<template>
  <div class="scroll-page">
    <scroll
      class="scroll-wrapper"
      @scroll="scroll"
      :listenScroll="true"
      @pullingDown="pullingDown"
      ref="scroll"
    >
      <ul>
        <li v-for="i in 100" :key="i" @click="click(i)">hello world{{i}}</li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import Scroll from '@/components/scroll';

export default {
  components: {
    Scroll
  },
  methods: {
    click(i) {
      console.log('hello world' + i);
    },
    scroll(pos) {
      // console.log(pos);
    },
    pullingDown() {
      console.log('hhhh');
      setTimeout(() => {
        this.$refs.scroll.finishPullDown();
      }, 3000);
    }
  }
};
</script>

<style lang="stylus" scoped>
.scroll-wrapper
  height: 300px
</style>
