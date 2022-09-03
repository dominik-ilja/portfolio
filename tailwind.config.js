/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/**/*.{html,js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  safelist: [],
  theme: {
    extend: {
      colors: {},
    },
    screens: {
      "xs": "380px",
      "sm": "500px",
      "md": "768px",
      "lg": "1118px"
    },
  },
  plugins: [],
};
