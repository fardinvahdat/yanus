import { defineStore } from "pinia";
export const useCreateEvent = defineStore("create-event", () => {
  const state = ref({
    amount: null,
    name: "",
    coverPhoto: "",
    description: "",
    endDate: "",
    category: null,
    mileStones: [],
  });
  const image = ref({
    image: null,
    imageLink: "",
  });
  const activeStepp = ref(1);
  const isImageUploading = ref(false);

  return {
    state,
    activeStepp,
    image,
    isImageUploading,
  };
});
