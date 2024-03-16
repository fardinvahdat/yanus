import en from "./locales/en";
import fa from "./locales/fa";

export default defineI18nConfig(() => {
  return {
    legacy: false,
    locale: "en",
    lazy: true,
    langDir: "locales",
    locales: [
      {
        code: "en",
        file: "en.js",
      },
      {
        code: "fa",
        file: "fa.js",
      },
    ],
    messages: {
      en,
      fa,
    },
  };
});
