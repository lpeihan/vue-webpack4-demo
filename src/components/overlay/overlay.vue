<template>
  <transition name="v-fade">
    <div
      class="overlay"
      v-show="show"
      :style="{
        'z-index': zIndex,
      }"
      @touchmove.prevent.stop
      :class="{ 'show': showOverlay }"
      @click="$emit('click', $event)"
    ></div>
  </transition>
</template>

<script>
export default {
  name: 'overlay',

  props: {
    zIndex: {
      type: Number,
      default: 1000
    },
    show: {
      type: Boolean,
      default: false
    },
    showOverlay: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="stylus" scoped>
.overlay
  fixed: top left right bottom

  &.show
    background: $color-overlay
</style>
