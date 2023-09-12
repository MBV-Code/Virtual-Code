/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        banner: 'banner 15s linear infinite',
        banner2: 'banner2 15s linear infinite'
      },
      keyframes: {
        banner: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        banner2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' }
        }
      }
    }
  },
  plugins: []
}
