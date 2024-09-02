const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure all your file types are covered
  ],
  theme: {
    extend: {
      // You can add your custom extensions here
    },
  },
  plugins: [],
});
