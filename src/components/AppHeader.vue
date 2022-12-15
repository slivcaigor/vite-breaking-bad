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
  <section class="d-flex align-items-center justify-content-around mt-4">
    <a href="/">
      <!-- return the full URL of the image file -->
      <img :src="getImageURL(`logo.png`)" alt="Rick and Morty Logo">
    </a>

    <div class="dropdown-center">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Select category
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Human</a></li>
        <li><a class="dropdown-item" href="#">Alien</a></li>
      </ul>
    </div>
  </section>
</template>


<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/mixins.scss' as *;
@use '../styles/partials/variables' as *;

section {
  .btn {
    font-weight: 400 !important;
    color: #fff !important;
    background-color: #2EA44F !important;
  }

  img {
    width: 15%;
  }
}
</style>