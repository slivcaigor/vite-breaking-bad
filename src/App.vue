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
    getCharacters() {
      axios
        .get(store.apiURL)
        .then(res => { store.characterList = res.data.results; })
        .catch(err => {
          console.log("Errori", err);
        })
    }
  },
  mounted() {
    this.getCharacters();
  }
}
</script>

<template>
  <header>
    <AppHeader />
  </header>

  <main>
    <CharactersList />
  </main>

</template>

<style lang="scss" scoped>
@use './styles/general.scss' as *;

main {
  background-color: #44281d;
  padding: 2em 0;
}
</style>
