const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      height: {
        94: "22rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ addBase }) {
      addBase({
        '[type="search"]::-webkit-search-decoration': { display: "none" },
        '[type="search"]::-webkit-search-cancel-button': { display: "none" },
        '[type="search"]::-webkit-search-results-button': { display: "none" },
        '[type="search"]::-webkit-search-results-decoration': {
          display: "none",
        },
      });
    }),
  ],
};
