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

  <vue-flip class="flip rounded-4" active-click="true">
    <template v-slot:front class="front rounded-4">
      <img class="rounded-4" :src="info.image" :alt="info.name">
    </template>
    <template v-slot:back class="back rounded-4">
      <h4 class="text-center fw-bold">{{ info.name }}</h4>
      <div class="text-center">{{ info.status }}</div>
      <div class="text-center">{{ info.species }}</div>
    </template>
  </vue-flip>

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

.flip {
  border: 1px solid wheat;
  cursor: pointer;
  width: calc(1200px / 4 - 2em);
  height: calc(1200px / 4 - 2em);
  padding: 1em;
  margin: 1em;

  img {
    box-shadow: 0 0 10px #888;
  }

  h4 {
    font-size: 2rem;
    color: #22A2BB;
  }

  div {
    font-size: 1.6rem;
    color: #22A2BB;
  }
}
</style>
