/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primaryGreen: "#23BE0A",
      secondaryColor: "#59c6d2",
      white: "#FFFFFF",
      bgGray: "#F4FCF3",
      black: "#122033",
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
