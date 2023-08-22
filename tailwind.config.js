/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          
      },
      colors: {
        'text-sec': '#878787',
        'bg-sec': 'linear-gradient(95.51deg, #D02129 0%, #750069 100%)',
        'button-bg':'linear-gradient(102.64deg, #E51E2A -32.2%, #EA13F2 178.76%)',
        'prm-bg':'#161616',
        'sec-bg':'#212121',
        'card-bg':'#1C1C1C',
        'offwhite':'#444444'
      },
      fontFamily: {
        'sec':['var(--font-clash-display)','sans'],
        'prm':['var(--font-grotesque)','sans']
      },
      borderRadius: {
        'prm' : '3px'
      }
    },
    darkMode: "class",
  plugins: [nextui()],
  },
  plugins: [],
}
