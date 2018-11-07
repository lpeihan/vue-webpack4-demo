<template>
    <div class="app">
        <router-link to="/">home</router-link>
        <router-link to="/user">user</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  mounted () {
    console.log('hdhddhdd');
  }
};
</script>

<style lang="stylus">
.app
    color: blue
    transform: scale(1)
</style>
