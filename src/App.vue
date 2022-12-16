<script>
import { store } from "./store.js";
import axios from 'axios';
import CharactersList from './components/CharactersList.vue'
import AppHeader from './components/AppHeader.vue'

export default {
  components: {
    CharactersList,
    AppHeader,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    // status is appended as a query parameter to the API URL with the key store.apiStatusParameter. If status is alive and store.apiStatusParameter is status, the resulting URL would be ${store.apiURL}?status=alive.
    getCharacters(status) {

      let myUrl = store.apiURL;

      if (status) {
        myUrl += `?${store.apiStatusParameter}=${status}`
      }

      axios
        .get(myUrl)
        .then(res => { store.characterList = res.data.results; })
        .catch(err => {
          console.log("Errori", err);
        })
    },
  },
  mounted() {
    this.getCharacters();
  }
}
</script>

<template>
  <section class="ms_boxed">
    <div class="ms_wrapper">

      <header>
        <!-- passes a prop called performSearch. The value of the prop is a method called getCharacters -->
        <AppHeader @performSearch="getCharacters" />
      </header>

      <main>
        <CharactersList />
      </main>

    </div>
  </section>
</template>

<style lang="scss" scoped>
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;

.ms_boxed {
  background-image: url("./assets/img/jumbo.jpg");
  padding: 5vh 0;

  .ms_wrapper {
    width: 95%;
    min-height: 90vh;
    margin: 0 auto;
    backdrop-filter: blur(0) saturate(180%);
    background-color: rgba(17, 25, 40, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    box-shadow: 0px 0px 10px 5px $accent;
  }
}
</style>
