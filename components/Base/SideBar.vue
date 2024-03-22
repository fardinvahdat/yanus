<template>
  <div
    @mouseleave="isCollapse = true"
    @mouseenter="isCollapse = false"
    class="max-w-min sticky left-0 border-[#dcdfe6] border-r-[1px] h-[calc(100vh-60px)]"
  >
    <Menu :isCollapse="isCollapse" />

    <!-- quick access  -->
    <QucikAccess :isCollapse="isCollapse" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import QucikAccess from "./widgets/QucikAccess.vue";
import Menu from "./widgets/Menu.vue";

const isCollapse = ref(true);
</script>
