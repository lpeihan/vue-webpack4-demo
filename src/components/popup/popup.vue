<template>
  <transition name="fade">
    <div class="popup" v-if="show" @click="close" @touchmove="$event.preventDefault()">
      <div class="popup-content" :class="`popup-${type}`" @click.stop>
        <slot></slot>
      </div>
    </div>
  </transition>
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
  }
};
</script>

<style lang="stylus" scoped>
.popup
  fixed: top left right bottom
  background: rgba(0, 0, 0, 0.7)

  &.fade
    &-enter-active
    &-leave-active
      transition: all .3s

      .popup-content
        transition: all .3s

    &-enter
    &-leave-to
      opacity: 0

      .popup-content
        opacity: 0

      .popup-center
        transform: translate3d(-50%, -50%, 0) scale(0.7)

      .popup-bottom
        transform: translate3d(0, 100%, 0)

      .popup-top
        transform: translate3d(0, -100%, 0)

      .popup-left
        transform: translate3d(-100%, 0, 0)

      .popup-right
        transform: translate3d(100%, 0, 0)

  &-content
    background: white

  &-center
    absolute: top 50% left 50%
    width: 80%
    min-height: 100px
    transform: translate3d(-50%, -50%, 0) scale(1)

  &-bottom
    absolute: bottom left right
    min-height: 100px

  &-top
    absolute: top left right
    min-height: 100px

  &-left
    absolute: top bottom left
    min-width: 50%

  &-right
    absolute: top bottom right
    min-width: 50%
</style>
