<template>
  <div>
    <!-- desktop header  -->

    <div class="md:flex items-center gap-4 hidden">
      <div
        class="xl:text-sm text-xs text-Gray-b1 dark:text-LightGray-b1 flex items-center"
      >
        <Icon name="logo" />
      </div>
      <label
        for="search"
        class="items-center justify-between gap-4 bg-Gray-b4 bg-opacity-20 hover:bg-opacity-40 h-10 px-3 rounded-lg lg:w-[400px] hidden md:flex"
      >
        <input
          id="search"
          type="text"
          placeholder="Search Collections / Addresses / NFTs"
          class="bg-transparent outline-none"
        />
        <span
          class="w-6 h-6 bg-white rounded-lg flex items-center justify-center"
          >/</span
        >
      </label>
      <div class="xl:text-sm text-xs text-Gray-b1 dark:text-LightGray-b1">
        <span class="font-semibold flex items-center gap-1"
          ><Icon name="eth" />{{ data.NFTPrice }}</span
        >
      </div>
      <div class="xl:text-sm text-xs text-Gray-b1 dark:text-LightGray-b1">
        <span class="font-semibold flex items-center whitespace-nowrap gap-1"
          ><Icon name="gas" color="red" />{{ data.BaseFee }}</span
        >
      </div>
    </div>

    <!-- mobile header  -->

    <div class="md:hidden items-center gap-2 flex">
      <div><img src="/logo.svg" class="w-7 h-7" alt="" /></div>
      <button
        @click="drawer = true"
        class="w-7 h-7 flex p-1 items-center justify-center rounded-lg bg-Gray-b4 bg-opacity-50"
      >
        <i class="isax isax-menu-1 text-[20px]" />
      </button>
      <div
        class="w-7 h-7 flex p-1 items-center justify-center rounded-lg bg-Gray-b4 bg-opacity-50"
      >
        <i class="isax isax-search-normal text-[20px]" />
      </div>

      <!-- header drawer -->
      <ClientOnly>
        <el-drawer v-model="drawer" :show-close="true" size="100%">
          <template #title>
            <h4 class="text-Gray-b1 text-xl font-semibold">Menu</h4>
          </template>

          <!-- menu -->

          <el-menu
            default-active="1"
            class="el-menu-vertical-demo border-none h-[calc(100vh-230px)]"
            active-text-color="#5177ff"
          >
            <el-menu-item
              v-for="(item, index) in navigation"
              :key="index"
              :index="item.index"
              class="px-0"
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
        </el-drawer></ClientOnly
      >
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/header");
import Icon from "@/components/TheIcon/Icon.vue";

//state

const drawer = ref(false);
const { navigation } = useHeaderNavigation();
</script>
