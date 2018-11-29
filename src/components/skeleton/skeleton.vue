<template>
    <transition name="skeleton" mode="out-in">
        <template v-if="show">
            <slot></slot>
        </template>
        <template v-else>
            <slot name="skeleton"></slot>
        </template>
    </transition>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      show: false
    };
  },
  methods: {
    unobserve() {
      this.io && this.io.unobserve(this.$el);
    }
  },
  mounted() {
    this.io = new window.IntersectionObserver((entries) => {
      if (entries[0].isIntersecting || entries[0].intersectionRatio) {
        this.show = true;
        this.unobserve();
      }
    });

    this.io.observe(this.$el);
  },
  beforeDestroy() {
    this.unobserve();
  }
};
</script>

<style lang="stylus" scoped>
.skeleton
    &-enter-active
    &-leave-active
        transition: all .3s
    &-enter
        opacity: 0.5
</style>
