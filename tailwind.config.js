/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background : "#111827",
        cardBackground : "#0e182b",
        teal: {
          50: '#effcfb',
          100: '#d7f5f2',
          200: '#b3eae4',
          300: '#7edad1',
          400: '#43c2b9',
          500: '#27aa9e',
          600: '#0d9488',
          700: '#11766c',
          800: '#115e57',
          900: '#134e49',
          950: '#042f2c',
        },
        yellow: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
};