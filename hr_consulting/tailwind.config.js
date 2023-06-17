/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {

        primary: "#00040f",
        main: "#08FFC8",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgb(32, 73, 105, 0.3)",
        // dimBlue: "#DADADA",
        // secondary: "#08FFC8",
        // dimWhite: "#FFF7F7",
        // primary: "#000000"
       // primary: "#204969",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};