const { nextui } = require('@nextui-org/theme');
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default;

function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  
  addBase({ ":root": newVars });
}

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1953D9',
        text: '#09235F',
        secondary: '#97CC04',
        button: '#F8C630',
        background: '#ffffff',
        border: '#DB3A34',
      },
    },
    fontFamily: {
      geologica: ['Geologica', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [nextui(), addVariablesForColors],
};