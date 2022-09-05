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
      backgroundImage: {
        'intro': "url('/src/assets/bg.svg')"
      },
      colors: {
        bg: {
          light: '#222220',
          DEFAULT: '#181818'
        },
        primary: {
          light: '#F0BC04',
          DEFAULT: '#A8891B'
        },
        text: {
          DEFAULT: '#AAA9A9',
          dark: '#8B8B8B'
        }
      },
    },
    fontFamily: {
      space: ['Space Grotesk', 'sans-serif']
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
