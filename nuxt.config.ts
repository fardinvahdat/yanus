// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // buildAssetsDir: "/something/",
    head: {
      // htmlAttrs: { dir: "rtl", lang: "fa" },
      link: [
        {
          rel: "apple-touch-icon",
          href: "",
          sizes: "180x180",
        },
      ],
    },
  },
  css: [
    "~/assets/fonts/icon/style.css",
    "~/assets/css/tailwind.css",
    "~/assets/css/Main.scss",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@pinia/nuxt", "@element-plus/nuxt"],
  // optional configuration
  socialShare: {
    // module options
  },

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
});
