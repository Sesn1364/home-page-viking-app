const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'custom': '40% 60% 40% 60% / 70% 70% 30% 30%',
      },
      keyframes: {
        enlargeReduce: {
          '0%, 100%': { width: '100px' },
          '50%': { width: '100vw' },
        },
        'grow-shrink': {
          '0%, 100%': { width: '0', height: '0' },
          '50%': { width: '500px', height: '500px' },
        },
      },
      animation: {
        'enlarge-reduce': 'enlargeReduce 1s ease-in-out infinite',
        'grow-shrink': 'grow-shrink 1.5s infinite',
      },
    },
  },
  plugins: [],
});
