<template>
  <div class="about">
    <h1 @click="open()">{{name}}</h1>
    <div class="rank"></div>
    <div class="block"></div>
    <van-button type="default" @click="doCopy()">{{copyText}}</van-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Dialog from '@/components/dialog';

export default {
  name: 'about',
  computed: {
    ...mapGetters('about', ['name'])
  },
  data() {
    return {
      copyText: '复制这一段话'
    };
  },
  methods: {
    open() {
      Dialog({
        title: '标题',
        message: '有赞是一家零售科技公司，致力于成为商家服务领域里最被信任的引领者'
      }).then(() => {
        console.log('confirm');
      }).catch(() => {
        console.log('cancel');
      });
    },
    doCopy() {
      this.$copyText(this.copyText).then((e) => {
        console.log('复制成功', e);
      }, (err) => {
        console.log('复制失败', err);
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.about
  .rank
    size: 20px
    background-size: 100% 100%
    bg-image("~@/assets/imgs/rank")

  .block
    size: 200px
    position: relative
    border-1px()
</style>
