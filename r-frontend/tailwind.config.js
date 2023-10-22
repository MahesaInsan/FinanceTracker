/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        'primaryColor': '#2D4D5D',
        'secondaryColor': '#8CC7D4',
        'hoverSecondaryColor' : '#365a68'
      },
      fontSize: {
        customSmall: '8px',
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}

