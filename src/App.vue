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
  <section class="ms_boxed">
    <div class="ms_wrapper">

      <header>
        <AppHeader />
      </header>

      <main>
        <CharactersList />
      </main>

    </div>
  </section>



</template>

<style lang="scss" scoped>
@use './styles/general.scss' as *;

.ms_boxed {
  background-image: url("./assets/img/jumbo.jpg");
  padding: 5vh 0;

  .ms_wrapper {
    width: 95%;
    height: 90vh;
    margin: 0 auto;
    backdrop-filter: blur(0) saturate(180%);
    background-color: rgba(17, 25, 40, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    box-shadow: 0px 0px 10px 5px #2EA44F;
  }
}
</style>
