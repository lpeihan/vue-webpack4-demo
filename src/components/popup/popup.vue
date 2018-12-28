<template>
  <div class="popup">
    <transition :name="type">
      <div class="popup-content" :class="`popup-${type}`" v-if="show">
        <slot></slot>
      </div>
    </transition>

    <transition name="overlay">
      <div
        class="popup-overlay"
        v-if="show"
        @touchmove="handleTouchmove($event)"
        @click.stop="close()"
      ></div>
    </transition>
  </div>
</template>

<script>
import popup from '@/mixins/popup';

export default {
  mixins: [popup],
  props: {
    type: {
      type: String,
      default: 'center',
      validator(val) {
        return ['center', 'top', 'left', 'right', 'bottom'].indexOf(val) > -1;
      }
    }
  },
  methods: {
    handleTouchmove(e) {
      e.preventDefault();
      e.stopPropagation();
    }
  }
};
</script>

<style lang="stylus" scoped>
.popup
  &-top
    fixed: top left right

  &-left
    fixed: top bottom left
    width: 50%

  &-bottom
    fixed: bottom left right

  &-right
    fixed: top bottom right
    width: 50%

  &-center
    fixed: top 50% left 50%
    transform: translate3d(-50%, -50%, 0)
    border-radius: 4px
    width: 80%

  &-content
    min-height: 100px
    z-index: 101
    text-align: center
    overflow: hidden
    transition: all $transition-time
    background: $white

    &.center-enter
      opacity: 0
      transform: translate3d(-50%, -50%, 0) scale(0.7)

    &.center-leave-to
      opacity: 0
      transform: translate3d(-50%, -50%, 0) scale(0.9)

    &.top-enter
    &.top-leave-to
      transform: translate3d(0, -100%, 0)

    &.right-enter
    &.right-leave-to
      transform: translate3d(100%, 0, 0)

    &.bottom-enter
    &.bottom-leave-to
      transform: translate3d(0, 100%, 0)

    &.left-enter
    &.left-leave-to
      transform: translate3d(-100%, 0, 0)

  &-overlay
    fixed: top left right bottom
    z-index: 100
    background: $color-overlay
    transition: all $transition-time

    &.overlay
      &-enter
      &-leave-to
        opacity: 0
</style>
