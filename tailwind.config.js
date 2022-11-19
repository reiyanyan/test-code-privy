/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "nuxt.config.{js,ts}",
    "components/**/*.{vue,js}",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "composables/**/*.{js,ts}",
    "plugins/**/*.{js,ts}",
    "App.{js,ts,vue}",
    "app.{js,ts,vue}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
