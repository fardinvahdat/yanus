/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    container: {
      center: true,
      padding: "10px",
    },
    extend: {
      colors: {
        Primary: {
          DEFAULT: "#A259FF",
        },
        Gray: {
          b1: "#2B2B2B",
          b2: "#3B3B3B",
          b3: "#858584",
          b4: "#CCCCCC",
          b5: "#FFFFFF",
        },
        LightGray: {
          b1: "#FFFFFF",
          b2: "#CCCCCC",
          b3: "#cbcbcb",
          b4: "#3B3B3B",
          b5: "#2B2B2B",
        },
      },
      boxShadow: {
        sm: "0px 0px 19px rgba(0, 0, 0, 0.03);",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
