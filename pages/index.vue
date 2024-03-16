<template>
  <div>
    <Header />
    <template v-if="false">
      <TechnicalAnalysis />
      <Chart
        :options="{
          symbol: 'NFTUSDT',
          hide_side_toolbar: false,
          allow_symbol_change: false,
          hide_top_toolbar: true,
          studies: [
            'ROC@tv-basicstudies',
            'StochasticRSI@tv-basicstudies',
            'MASimple@tv-basicstudies',
          ],
          style: 1,
        }" />
      <CryptoMarket />
      <Snaps />
      <Screener
    /></template>
    <button
      class="px-3 py-2 bg-black text-white"
      v-if="false"
      @click="clickHandler"
    >
      click to show
    </button>
  </div>
</template>

<script setup>
import Header from "@/components/Base/Header.vue";
import datafeed from "@/server/datafeed/datafeed";
const isLoaded = ref(true);

//mounted

onMounted(() => {
  if (process.client) {
    setTimeout(() => {
      isLoaded.value = true;
    }, 1000);
  }
});

const clickHandler = () => {
  console.log(datafeed);
};
</script>

<style lang="scss" scoped></style>
