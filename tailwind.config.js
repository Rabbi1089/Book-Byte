/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primaryGreen: "#43ff64d9",
      white: "#FFFFFF",
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
