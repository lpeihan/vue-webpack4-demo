<template>
  <div class="home">
    <skeleton>
        <div key="0" class="0">
            <img src="../../assets/imgs/logo.png" width="100">
            <p>
                <router-link to="/home">home</router-link>
                <router-link to="/user">user</router-link>
                <router-link to="/about">about</router-link>
            </p>
        </div>
        <div key="1" slot="skeleton" class="1">
            <img src="../../assets/imgs/logo.png" width="100">
            <p>

                <span class="one">1</span>
                <span class="one">2</span>
                <span class="one">3</span>
            </p>

        </div>
    </skeleton>
  </div>
</template>

<script>
import Skeleton from '@/components/skeleton/skeleton';

export default {
  components: {
    Skeleton
  },
  created() {
    this.$http({
      url: '/data',
      loading: true
    });
  }
};
</script>

<style lang="stylus" scoped>
.home
    text-align: center

</style>
