<script>
import { VueFlip } from 'vue-flip';
export default {
  props: {
    info: Object,
  },
  components: {
    'vue-flip': VueFlip
  }
};
</script>

<template>
  <vue-flip active-click="true" width="300px" height="300px">
    <template v-slot:front class="front">
      <img :src="info.image" :alt="info.name">
    </template>
    <template v-slot:back class="back">
      <h4>{{ info.name }}</h4>
      <div>{{ info.status }}</div>
      <div class="font-weight-bold">{{ info.species }}</div>
    </template>
  </vue-flip>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/mixins.scss' as *;
@use '../styles/partials/variables' as *;
</style>
