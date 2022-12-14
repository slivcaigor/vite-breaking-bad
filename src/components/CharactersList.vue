<script>
import CharacterCard from './CharacterCard.vue'
import { store } from "../store.js";

export default {
  components: {
    CharacterCard
  },
  data() {
    return {
      store,
    }
  },
}
</script>

<template>
  <section class="container">
    <div class="row">
      <div v-for="character in store.characterList" :key="character.id">
        <CharacterCard :info="character" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/mixins.scss' as *;
@use '../styles/partials/variables' as *;
</style>