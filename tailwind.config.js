/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    screens: {
      xs: "320px",
      xm: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
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
