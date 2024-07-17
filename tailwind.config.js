/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#262626', // дефолтный цвет страницы
        'b-color': '#4d4d4d' // цвет обводки
      }
    }
  },
  plugins: []
}
