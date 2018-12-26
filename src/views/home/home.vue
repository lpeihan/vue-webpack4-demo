<template>
  <div class="home">
    <skeleton>
        <div key="0" class="0">
            <img src="../../assets/imgs/logo.png" width="100">
            <icon name="tips"></icon>
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
import { getExample } from '@/api/example';

export default {
  components: {
    Skeleton
  },
  async created() {
    const res = await getExample().catch(err => {
      console.error(err);
    });
    console.log(res);
  }
};
</script>

<style lang="stylus" scoped>
.home
  text-align: center

</style>
