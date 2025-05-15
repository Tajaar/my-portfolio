/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0A0A0A',
          '100': '#121212',
          '200': '#1A1A1A',
          '300': '#242424',
        },
        'neon-purple': {
          DEFAULT: '#B026FF',
          'light': '#C052FF',
          'dark': '#8C1FCC',
        },
        'neon-gold': {
          DEFAULT: '#FFD700',
          'light': '#FFDF4D',
          'dark': '#CCAC00',
        },
      },
      boxShadow: {
        'neon-sm': '0 0 5px rgba(176, 38, 255, 0.5)',
        'neon-md': '0 0 15px rgba(176, 38, 255, 0.6)',
        'neon-lg': '0 0 25px rgba(176, 38, 255, 0.7)',
        'neon-xl': '0 0 35px rgba(176, 38, 255, 0.8)',
        'neon-2xl': '0 0 50px rgba(176, 38, 255, 0.9)',
        'neon-inner': 'inset 0 0 15px rgba(176, 38, 255, 0.5)',
        'gold-sm': '0 0 5px rgba(255, 215, 0, 0.5)',
        'gold-md': '0 0 15px rgba(255, 215, 0, 0.6)',
        'gold-lg': '0 0 25px rgba(255, 215, 0, 0.7)',
        'gold-xl': '0 0 35px rgba(255, 215, 0, 0.8)',
        'gold-2xl': '0 0 50px rgba(255, 215, 0, 0.9)',
        'gold-inner': 'inset 0 0 15px rgba(255, 215, 0, 0.5)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'hover-glow': 'hoverGlow 1s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 15px rgba(176, 38, 255, 0.6)',
          },
          '50%': {
            boxShadow: '0 0 25px rgba(176, 38, 255, 0.8)',
          },
        },
        hoverGlow: {
          '0%, 100%': {
            boxShadow: '0 0 25px rgba(176, 38, 255, 0.7)',
          },
          '50%': {
            boxShadow: '0 0 35px rgba(176, 38, 255, 0.9)',
          },
        },
      },
    },
  },
  plugins: [],
}