/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT');
const plugin = require('tailwindcss/plugin');

module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, #D02129 0%, #750069 100%)',
      },

      fontFamily: {
        grotesque: ['var(--font-grotesque)', 'sans'],
        'clash-display': ['var(--font-clash-display)', 'sans'],
        conthrax: ['var(--font-conthrax)', 'sans'],
        neue: ['var(--font-neue)', 'sans'],
      },

      colors: {
        'primary-black': '#141414',
      },
    },
  },

  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.gradient-text': {
          background: 'linear-gradient(90deg, #E51E2A 0%, #EA13F2 100%)',
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
      };

      addUtilities(newUtilities);
    }),
  ],
});
