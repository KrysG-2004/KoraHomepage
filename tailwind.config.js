/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
        'gradient': 'gradient 4s linear infinite',
        'shimmer': 'shimmer 4s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '400% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '400% 0%' },
        }
      }
    },
  },
  plugins: [],
}
