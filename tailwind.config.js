/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: {
          400: '#F0B90B', // Binance primary yellow
          500: '#D9A813',
        }
      },
      fontFamily: {
        'body': ['"Inter"', 'sans-serif'],
        'arabic': ['"IBM Plex Sans Arabic"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }
    },
  },
  plugins: [],
};