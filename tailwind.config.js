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
        'intro-mobile': "url('/src/assets/bg-mobile.svg')",
        'intro-tablet': "url('/src/assets/bg-tablet.svg')",
        'intro-desktop': "url('/src/assets/bg-desktop.svg')",
        'about-rings': "url('/src/assets/rings.svg')"
      },
      colors: {
        bg: {
          light: '#222220',
          'light-200': '#272727',
          DEFAULT: '#181818',
        },
        primary: {
          light: '#F0BC04',
          'light-100': '#E7CA62',
          'light-200': '#F2E3AD',
          DEFAULT: '#A8891B'
        },
        text: {
          DEFAULT: '#AAA9A9',
          dark: '#8B8B8B'
        },
        frontend: {
          DEFAULT: '#1D667A',
          light: '#61DAFB'
        },
        backend: {
          DEFAULT: '#59338A',
          light: '#6914D6'
        },
        workflow: {
          DEFAULT: '#94205E',
          light: '#F82396'
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
