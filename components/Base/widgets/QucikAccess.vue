<template>
  <div
    class="flex justify-between group-item transition-none h-[170px]"
    :class="isCollapse ? 'items-center flex-col' : ' flex-row items-end pb-3'"
  >
    <button class="w-[40px] h-[40px] flex items-center justify-center box-item">
      <Icon name="lamp" />
    </button>
    <button class="w-[40px] h-[40px] flex items-center justify-center box-item">
      <Icon name="x" />
    </button>
    <button class="w-[40px] h-[40px] flex items-center justify-center box-item">
      <Icon name="discord" />
    </button>
  </div>
</template>

<script setup>
import Icon from "@/components/TheIcon/Icon.vue";

const props = defineProps({
  isCollapse: {
    default: true,
  },
});

const isCollapse = computed(() => {
  return props.isCollapse;
});
</script>
