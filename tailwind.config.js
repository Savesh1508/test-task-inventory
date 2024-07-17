/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        body: 'var(--body)', // цвет страницы
        primary: 'var(--primary)', // основной страницы
        switcher: 'var(--switcher)',
        'hover-primary': 'var(--hover-primary)', // цвет при наводке
        'b-color': 'var(--b-color)', // цвет обводки
        't-color': 'var(--t-color)', // цвет текстов
        'confirmbtn-color': 'var(--confirmbtn-color)', // цвет кнопки подтверждении удаления
        'hover-confirmbtn-color': 'var(--hover-confirmbtn-color)', // цвет при наводке на кнопку подтверждения
        'cancelbtn-color': 'var(--cancelbtn-color)', // цвет кнопки отмены
        'cancelbtn-text-color': 'var(--cancelbtn-text-color)' // цвет текста кнопки отмены
      }
    }
  },
  plugins: []
}
