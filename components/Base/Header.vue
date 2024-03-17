<template>
  <header class="sticky top-0 z-10">
    <div class="top flex justify-between px-4 py-[10px]">
      <!-- first section  -->

      <HeaderFirstSection />

      <!-- second section  -->

      <HeaderSecondSection />
    </div>
    <el-divider class="my-0" />
  </header>
</template>

<script setup>
import HeaderSecondSection from "./widgets/HeaderSecondSection.vue";
import HeaderFirstSection from "./widgets/HeaderFirstSection.vue";
</script>
