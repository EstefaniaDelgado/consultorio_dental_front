const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        royalblue: '#7383c1',
        lightgray:'#979797'
      },
    },
  },
  plugins: [],
});
