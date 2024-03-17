<template>
  <div
    @mouseleave="isCollapse = true"
    @mouseenter="isCollapse = false"
    class="max-w-min sticky left-0 border-[#dcdfe6] border-r-[1px] h-[calc(100vh-60px)]"
  >
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo border-none h-[calc(100vh-230px)]"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
      active-text-color="#5177ff"
    >
      <el-menu-item
        v-for="(item, index) in navigation"
        :key="index"
        :index="item.index"
      >
        <i
          class="isax text-[24px] font-normal mr-2 mb-1"
          :class="`isax-${item.icon}`"
        />
        <template #title>
          <span>{{ item.label }}</span>
        </template>
      </el-menu-item>
    </el-menu>

    <!-- quick access  -->
    <QucikAccess :isCollapse="isCollapse"/>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import QucikAccess from "./widgets/QucikAccess.vue";

const isCollapse = ref(true);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const { navigation } = useHeaderNavigation();
</script>

<style>
.el-menu-vertical-demo {
  width: 72px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
