<template>
  <transition name="v-fade">
    <div id="loading" v-show="show">
      <div class="loading-content">
        <van-loading color="white" type="spinner"></van-loading>
      </div>

      <overlay :show="show" :showOverlay="false"></overlay>
    </div>
  </transition>
</template>

<script>
import Overlay from '@/components/overlay';

export default {
  components: {
    Overlay
  },
  data() {
    return {
      show: false
    };
  }
};
</script>

<style lang="stylus" scoped>
.loading
  &-content
    fixed: top 50% left 50%
    transform: translate3d(-50%, -50%, 0)
    size: 60px
    display: flex
    justify-content: center
    align-items: center
    border-radius: $border-radius-small
    background: $color-overlay
</style>
