import { defineStore } from "pinia";
export const useVote = defineStore("vote", () => {
  const state = ref({
    vote: false,
    comment: "",
  });

  return {
    state,
  };
});
