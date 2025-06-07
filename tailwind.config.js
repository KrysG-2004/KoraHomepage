/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', 'src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#316CFF',
        accent: '#6D88FF'
      },
      fontFamily: {
        inter: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif']
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        gradient: 'gradient 5s ease infinite'
      },
      keyframes: {
        gradient: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        }
      }
    }
  }
}
