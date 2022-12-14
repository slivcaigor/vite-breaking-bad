<script>
export default {
  props: {
    info: Object
  }
}
</script>

<template>
  <div class="container text-center">
    <img :src="info.image" :alt="info.name">
    <h4>{{ info.name }}</h4>
    <div>{{ info.status }}</div>
    <div class="font-weight-bold">{{ info.species }}</div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/mixins.scss' as *;
@use '../styles/partials/variables' as *;
</style>