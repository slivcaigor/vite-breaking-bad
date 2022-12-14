import { reactive } from "vue";

export const store = reactive({
  CharactersList: [],
  apiURL: "https://rickandmortyapi.com/api/character",
});