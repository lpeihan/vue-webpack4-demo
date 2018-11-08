<template>
    <div class="about">
        <h1>{{name}}</h1>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'about',
  computed: {
    ...mapGetters('about', ['name'])
  }
};
</script>
