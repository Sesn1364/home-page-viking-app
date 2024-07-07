import withMT from "@material-tailwind/html/utils/withMT";
 
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        enlargeReduce: {
          '0%, 100%': { width: '100px' },
          '50%': { width: '100vw' },
        },
      },
      animation: {
        'enlarge-reduce': 'enlargeReduce 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
});

