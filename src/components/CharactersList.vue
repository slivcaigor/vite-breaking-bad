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
      activeImage: 0,
      timer: 0,
    }
  },
  methods: {
    // The method takes the first element of the characterList array and pushes it to the end of the array. This has the effect of shifting all of the elements in the array to the left by one position.
    shiftSlidesLeft() {
      this.store.characterList.push(this.store.characterList.shift());
    },
    // The method does the opposite, taking the last element of the characterList array and unshifting it to the beginning of the array, effectively shifting all of the elements to the right by one position.
    shiftSlidesRight() {
      this.store.characterList.unshift(this.store.characterList.pop());
    },
    // The method calls the shiftSlidesLeft method, and then sets the activeImage property to the previous value minus one. This has the effect of showing the next image in the array.
    nextImage() {
      this.shiftSlidesLeft();
      this.activeImage--;
    },
    // The method is similar, but calls the shiftSlidesRight method and sets the activeImage property to the previous value plus one. This has the effect of showing the previous image in the array.
    prevImage() {
      this.shiftSlidesRight();
      this.activeImage++;
    },
    // start() {
    //   this.timer = setInterval(() => {
    //     this.nextImage();
    //   }, 3000);
    // },
    pause() {
      clearInterval(this.timer);
    },
  },
  // mounted() {
  //   this.start();
  // },
}
</script>

<template>
  <div class="container-slides">
    <div class="ms_cards container">
      <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4">
        <div class="col" v-for="(character, index) in store.characterList" :key="character.id">
          <CharacterCard v-if="index <= 3" :info="character" @mouseover="pause" @mouseleave="start" />
        </div>
      </div>
    </div>
    <div class="prev" @click="prevImage"></div>
    <div class="next" @click="nextImage"></div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/mixins' as *;

.container {
  max-width: 1500px !important;
}

.container-slides {
  padding-top: 10vh;
  @include center();
  position: relative;
}

.prev {
  margin: 2em;
  left: 0;
  background-image: url("../assets/img/icons8-chevron-sinistra-64.png");
  height: 64px;
  width: 64px;
  position: absolute;
  cursor: pointer;
  z-index: 999;
}

.next {
  margin: 2em;
  right: 0;
  background-image: url("../assets/img/icons8-chevron-destra-64.png");
  height: 64px;
  width: 64px;
  position: absolute;
  cursor: pointer;
  z-index: 999;
}
</style>