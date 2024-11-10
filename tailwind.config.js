/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#8B5CF6',
          500: '#7C3AED',
          900: '#2E1065',
        },
        accent: {
          400: '#F472B6',
          900: '#831843',
        },
        highlight: {
          400: '#60A5FA',
          900: '#1E3A8A',
        },
      },
    },
  },
  plugins: [],
};