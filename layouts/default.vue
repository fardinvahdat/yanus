<template>
  <div>
    <Header />
    <div>
      <SideBar class="md:block hidden"/>
      <slot />
    </div>
  </div>
</template>
<script setup>
import Header from "@/components/Base/Header.vue";
import SideBar from "@/components/Base/SideBar.vue";
</script>
