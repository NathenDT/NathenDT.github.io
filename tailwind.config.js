/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      textColor: {
        default: '#fff',
      },
      animation: {
        'animation-slideUp': 'slideUp ease 0.5s forwards 0.5s',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': {
            transform: 'translateY(-40px)',
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
}
