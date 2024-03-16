<template>
  <header>
    <!-- first section  -->

    <div class="top flex justify-between px-4 py-2">
      <div class="flex items-center gap-4">
        <div
          class="xl:text-sm text-xs text-Gray-b1 dark:text-LightGray-b1 flex items-center"
        >
          <Icon name="logo" />
        </div>
        <label
          for="search"
          class="flex items-center justify-between gap-4 bg-Gray-b4 bg-opacity-20 hover:bg-opacity-40 h-10 px-3 rounded-lg lg:w-[400px]"
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

      <!-- second section  -->

      <div class="flex items-center gap-4">
        <div>
          <button
            class="bg-[#51E8E8] px-2 py-1 rounded-full text-Gray-b1 text-xs flex items-center gap-1 whitespace-nowrap"
          >
            Gonesis NFT
          </button>
        </div>
        <div><i class="isax isax-moon4" /></div>
        <div><i class="isax isax-global4" /></div>
        <div><i class="isax isax-shopping-cart" /></div>
        <div>
          <button
            class="bg-Primary px-2 py-1 rounded-lg text-Gray-b5 text-sm whitespace-nowrap"
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import Icon from "@/components/TheIcon/Icon.vue";
const { data } = await useFetch("/api/header");
</script>
