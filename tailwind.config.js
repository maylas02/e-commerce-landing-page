/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {},
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      opensans: ["Open Sans", "sans-serif"],
      cormorant: ["Cormorant Garamond", "serif"],
      ibm: ["IBM Plex Sans", "sans-serif"],
    },
  },
  plugins: [],
};
