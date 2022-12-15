<script>
export default {
  props: {
    info: Object,
  },
};
</script>

<template>

  <div class="card h-100">
    <img :src="info.image" class="card-img-top" :alt="'slide of ' + info.name">
    <div class="card-body">
      <h5 class="card-title">{{ info.name }}</h5>
      <p class="card-text">{{ info.status }}</p>
      <p class="card-text">{{ info.species }}</p>
    </div>
  </div>


</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
</style>
