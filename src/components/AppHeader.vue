<script>
import { store } from "../store.js";

export default {
  data() {
    return {
      store,
    }
  },
  methods: {
    filterCharacters(status) {
      this.$emit('performSearch', status);
    },
    getImageURL: function (imgPath) {
      // uses the URL constructor to create a new URL object based on the imgPath parameter and the import.meta.url property
      return new URL(`../assets/${imgPath}`, import.meta.url).href;
    },
  },
};


</script>

<template>
  <section class="d-flex align-items-center justify-content-around mt-4">
    <a href="!#">
      <!-- return the full URL of the image file -->
      <img :src="getImageURL(`logo.png`)" alt="Rick and Morty Logo">
    </a>

    <div class="dropdown-center">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Select category
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#" @click="filterCharacters('Alive')">Alive</a></li>
        <li><a class="dropdown-item" href="#" @click="filterCharacters('Dead')">Dead</a></li>
        <li><a class="dropdown-item" href="#" @click="filterCharacters('Unknown')">Unknown</a></li>
      </ul>
    </div>
  </section>
</template>


<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

section {
  .btn {
    font-weight: 400 !important;
    color: $primary !important;
    background-color: $accent !important;
  }

  img {
    width: 15%;
  }

  .dropdown-menu {
    --bs-dropdown-link-active-bg: #2EA44F !important;
  }
}
</style>