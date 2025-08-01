const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        custom: "calc(100% - 4rem)",
      },
      colors: {
        primary: "#000000BD",
        royalblue: "#7383c1",
        lightgray: "#979797",
        paleblue: "#BEF2F0",
        robineggblue: "#01CFC9",
        spacecadet: "#0F2650",
        spacecadetlow: "#0F2650CC",
        aliceblue: "#EEFBFA",
        richblack: "#061125",
        yankeesblue: "#152749",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        progressBar: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        progressBar: "progressBar 3s linear forwards",
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
    require("tailwind-scrollbar"),
  ],
});
