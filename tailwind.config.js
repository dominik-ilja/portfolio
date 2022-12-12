/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // darkMode: "class",
  safelist: [],
  theme: {
    extend: {
      gridTemplateColumns: {
        "resp-fill": "repeat(auto-fill, minmax(17.5rem, 1fr))",
        "resp-fit": "repeat(auto-fit, minmax(17.5rem, 1fr))",
      },
    },
    colors: {
      black: "var(--color-black)",
      white: "var(--color-white)",
      base: {
        1: "rgb(var(--color-base-01) / <alpha-value>)",
        5: "var(--color-base-05)",
        10: "var(--color-base-10)",
        20: "var(--color-base-20)",
        30: "var(--color-base-30)",
        40: "var(--color-base-40)",
        50: "var(--color-base-50)",
        60: "var(--color-base-60)",
        70: "var(--color-base-70)",
        80: "var(--color-base-80)",
        90: "var(--color-base-90)",
        100: "var(--color-base-100)",
      },
      yellow: {
        DEFAULT: "var(--color-yellow)",
      },
      green: {
        DEFAULT: "var(--color-green)",
      },
      cyan: {
        DEFAULT: "var(--color-cyan)",
        faded: "var(--color-cyan-faded)",
      },
      blue: {
        DEFAULT: "var(--color-blue)",
      },
      indigo: {
        DEFAULT: "var(--color-indigo)",
        muted: "var(--color-indigo-muted)",
      },
      purple: {
        DEFAULT: "var(--color-purple)",
        faded: "var(--color-purple-faded)",
      },
      pink: {
        DEFAULT: "var(--color-pink)",
        faded: "var(--color-pink-faded)",
      },
      red: {
        DEFAULT: "var(--color-red)",
        faded: "var(--color-red-faded)",
      },
    },
    fontFamily: {
      space: ["Space Grotesk", "sans-serif"],
    },
    screens: {
      xs: "380px",
      sm: "500px",
      md: "768px",
      lg: "1118px",
    },
  },
  plugins: [],
};
