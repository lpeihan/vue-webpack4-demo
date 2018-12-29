<template>
  <div class="popup">
    <transition :name="type" @after-leave="$emit('after-leave', $event)">
      <div
        class="popup-content"
        :class="`popup-${type}`"
        v-show="show"
        :style="{
          'z-index': zIndex
        }"
      >
        <slot></slot>
      </div>
    </transition>

    <overlay
      :show="show"
      @click="onClickOverlay()"
      :z-index="zIndex - 1"
      :show-overlay="showOverlay"
    ></overlay>
  </div>
</template>

<script>
import Overlay from '@/components/overlay';

export default {
  components: {
    Overlay
  },
  props: {
    type: {
      type: String,
      default: 'center',
      validator(val) {
        return ['center', 'top', 'left', 'right', 'bottom'].indexOf(val) > -1;
      }
    },
    zIndex: {
      type: Number,
      default: 1000
    },
    showOverlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    open() {
      this.show = true;
    },
    close() {
      this.show = false;
      this.$emit('close');
    },
    onClickOverlay() {
      if (this.closeOnClickOverlay) {
        this.close();
      }
      this.$emit('clickOverlay');
    }
  }
};
</script>

<style lang="stylus" scoped>
.popup
  font-size: $font-size-base

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
    border-radius: $border-radius-base
    width: $width-modal

  &-content
    min-height: 100px
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
</style>
