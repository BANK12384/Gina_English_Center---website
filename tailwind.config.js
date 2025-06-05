/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        glowMove: {
          '0%, 100%': { transform: 'translateY(0)', boxShadow: '0 0 8px 4px rgba(255, 255, 255, 0.7)' },
          '50%': { transform: 'translateY(-10px)', boxShadow: '0 0 16px 8px rgba(255, 255, 255, 1)' },
        },
      },
      animation: {
        'glow-move': 'glowMove 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

