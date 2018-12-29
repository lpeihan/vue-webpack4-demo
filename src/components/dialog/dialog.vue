<template>
  <popup
    ref="popup"
    @after-leave="afterLeave()"
    :z-index="zIndex"
    :closeOnClickOverlay="false"
  >
    <div class="dialog">
      <div class="dialog-header">{{title}}</div>
      <div class="dialog-content">{{message}}</div>
      <div class="dialog-footer">
        <div class="cancel" v-show="showCancelButton" @click="cancel()">{{cancelButtonText}}</div>
        <div class="confirm" @click="confirm()">{{confirmButtonText}}</div>
      </div>
    </div>
  </popup>
</template>

<script>
import Popup from '@/components/popup';

export default {
  components: {
    Popup
  },
  props: {
    title: {
      type: String,
      default: '标题'
    },
    message: {
      type: String,
      default: '内容'
    },
    zIndex: {
      type: Number,
      default: 1000
    },
    confirmButtonText: {
      type: String,
      default: '确认'
    },
    cancelButtonText: {
      type: String,
      default: '取消'
    },
    showCancelButton: {
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
      this.$refs.popup.open();
    },
    close() {
      this.$refs.popup.close();
    },
    afterLeave() {
      this.$destroy();
      this.$el.parentNode.removeChild(this.$el);
    },
    confirm() {
      this.close();
      this.$emit('confirm');
    },
    cancel() {
      this.close();
      this.$emit('cancel');
    }
  }
};
</script>

<style lang="stylus" scoped>
.dialog
  line-height: 1.5

  &-header
    font-weight: 500
    padding-top: 25px
    font-size: $font-size-large

  &-content
    color: $color-text-l
    text-align: left
    padding: 12px 28px 28px

  &-footer
    display: flex
    border-top-1px()

    .cancel
    .confirm
      flex: 1
      line-height: 44px
      &:active
        background: $color-active

    .confirm
      border-left-1px()
      color: $color-link
</style>
