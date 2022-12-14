<script>
export default {
  methods: {
    // takes an imgPath parameter and returns the full URL of an image file based on the given imgPath
    getImageURL: function (imgPath) {
      // uses the URL constructor to create a new URL object based on the imgPath parameter and the import.meta.url property
      return new URL(`../assets/${imgPath}`, import.meta.url).href;
    },
  },
}
</script>

<template>
  <section>
    <div class="top-bar"></div>
    <div class="wrapper">
      <a href="/">
        <!-- return the full URL of the image file -->
        <img :src="getImageURL(`logo.png`)" alt="Rick and Morty Logo">
      </a>
    </div>
  </section>
</template>


<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/mixins.scss' as *;
@use '../styles/partials/variables' as *;

.top-bar {
  background-color: #44281d;
  height: 2em;
}

section {
  text-align: center;
  background-color: #f0e14a;

  img {
    width: 20%;
    padding-bottom: 2em;
  }
}
</style>