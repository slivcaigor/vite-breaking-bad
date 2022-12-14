<script>
import { store } from "./store.js";
import axios from 'axios';
import CharactersList from './components/CharactersList.vue'

export default {
  components: {
    CharactersList
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
  <CharactersList />
</template>

<style lang="scss" scoped>
@use './styles/general.scss' as *;
@use './styles/partials/mixins.scss' as *;
@use './styles/partials/variables' as *;
</style>
