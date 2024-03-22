<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo border-none h-[calc(100vh-230px)]"
    :collapse="props.isCollapse"
    active-text-color="#5177ff"
    :collapse-transition="true"
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
</template>

<script setup>
const props = defineProps({
  isCollapse: {
    default: false,
  },
});
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
