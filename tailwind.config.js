const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    colors: {
      ...colors,
    },
    fontFamily: {
      sans: ["Outfit", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
