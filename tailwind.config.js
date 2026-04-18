/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#050816',
        panel: 'rgba(16, 24, 40, 0.45)',
        accent: '#6d5efc',
        cyan: '#22d3ee',
      },
      boxShadow: {
        glow: '0 20px 60px -20px rgba(109, 94, 252, 0.6)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        gradientShift: 'gradientShift 16s ease infinite',
      },
    },
  },
  plugins: [],
}
