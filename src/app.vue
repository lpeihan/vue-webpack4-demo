<template>
    <div class="app">
        <router-link to="/">home</router-link>
        <router-link to="/user">user</router-link>
        <router-link to="/about">about</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  mounted() {
    this.$http.get('api/banner');
    console.log('hdhddhdd');
  }
};
</script>

<style lang="stylus">
.app
    absolute: top 0
    color: $color-text-l
    transform: scale(1)
</style>
