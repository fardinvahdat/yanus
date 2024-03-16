<template>
  <div
    v-if="props.isLoading"
    :class="props.class"
    class="w-full bg-Gray-b2 dark:bg-LightGray-b2 bg-opacity-50 overflow-hidden flex justify-center"
  >
    <div class="loader">
      <div class="blob"></div>
      <div class="blob"></div>
      <div class="blob"></div>
      <div class="blob"></div>
      <div class="blob"></div>
      <div class="blob"></div>
      <div class="blob"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isLoading: {
    default: false,
  },
  class: {
    default: "",
  },
});
</script>
