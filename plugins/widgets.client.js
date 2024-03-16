import {
  Chart,
  CryptoMarket,
  Snaps,
  Screener,
  TechnicalAnalysis,
} from "vue-tradingview-widgets";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("Chart", Chart);
  nuxtApp.vueApp.component("Screener", Screener);
  nuxtApp.vueApp.component("CryptoMarket", CryptoMarket);
  nuxtApp.vueApp.component("Snaps", Snaps);
  nuxtApp.vueApp.component("TechnicalAnalysis", TechnicalAnalysis);
});
