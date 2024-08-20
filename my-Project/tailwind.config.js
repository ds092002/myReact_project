const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        'mulish' : ["Mulish"]
      }
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    flowbite.plugin(),
  ],
}

