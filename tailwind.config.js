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
      raleway: ["Raleway", ...defaultTheme.fontFamily.sans],
      raleway: ["Roboto", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: "#54B78A",
        secondary: "#52526B",
        "prim-back": "#343747",
        "second-back": "#282A36",
        "second-btn": "#818191",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
