/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      custom: {
        theme: "#F66B0E",
        darkTheme: "#D95F0D",
        footNav: "#222831",
        section1: "#F2F2F2",
        section2: "#FFFFFF",
        title: "#413F42",
        subtitle: "#000000",
        desc: "#383838",
        white: "#FFFFFF",
        black: "#000000",
        transparent: 'transparent',
      },
    },
  },
  plugins: [],
};