<template>
  <div class="scroll">
    <slot></slot>

    <slot name="pullDown">
      <div class="pull-down">下拉刷新</div>
    </slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll';

export default {
  components: {
    BScroll
  },
  data() {
    return {
      scroll: {}
    };
  },
  props: {
    click: {
      type: Boolean,
      default: true
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    mouseWheel: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    initScroll() {
      this.scroll = new BScroll(this.$el, {
        click: true,
        probeType: this.listenScroll ? 3 : 0,
        pullDownRefresh: true,
        mouseWheel: this.mouseWheel
      });

      if (this.listenScroll) {
        this.scroll.on('scroll', (pos) => {
          this.$emit('scroll', pos);
        });
      }

      this.scroll.on('pullingDown', () => {
        this.$emit('pullingDown');
      });
    },
    finishPullDown() {
      this.scroll && this.scroll.finishPullDown();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initScroll();
    });
  }
};
</script>

<style lang="stylus" scoped>
.scroll
  position: relative
  height: 100%
  overflow: hidden

  .pull-down
    absolute: left
    width: 100%
    display: flex
    justify-content: center
    align-items: center
</style>
