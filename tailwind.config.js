const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        primary: "#000000BD",
        royalblue: "#7383c1",
        lightgray: "#979797",
        paleblue: "#BEF2F0",
        robineggblue: "#01CFC9",
        spacecadet: "#0F2650",
        spacecadetlow: "#0F2650CC",
        aliceblue: "#EEFBFA",
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        ".no-spin::-webkit-outer-spin-button": {
          "-webkit-appearance": "none",
          margin: "0",
        },
        ".no-spin::-webkit-inner-spin-button": {
          "-webkit-appearance": "none",
          margin: "0",
        },
        ".no-spin": {
          "-moz-appearance": "textfield",
        },
      });
    },
  ],
});
