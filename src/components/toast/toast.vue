<template>
  <transition>
    <div class="toast"
         v-show="show">
      {{ message }}
    </div>
  </transition>
</template>

<script>
export default {
  name: 'toast',
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      show: false
    };
  }
};
</script>

<style lang="stylus" scoped>
.toast
  fixed: top 50% left 50%
  padding: 10px 20px
  color: white
  border-radius: 5px
  background: $color-overlay
  transform: translate3d(-50%, -50%, 0)

  &.v
    &-enter, &-leave-to
      opacity: 0

    &-enter-active, &-leave-active
      transition: all 0.3s
</style>
