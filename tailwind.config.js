/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
        sky: "#93c5fd",
        tahiti: {
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
        },
        sail: {
          50: "#f0f8ff",
          100: "#e0f0fe",
          200: "#bfe3fd",
          300: "#7dc9fc",
          400: "#38aef8",
          500: "#0e94e9",
          600: "#0275c7",
          700: "#035da1",
          800: "#074f85",
          900: "#0c436e",
          950: "#082a49",
        },
      },
    },
  },
  plugins: [],
};
