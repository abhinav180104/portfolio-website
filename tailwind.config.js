/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#0b1120',
        azure: '#38bdf8',
        lime: '#a3e635',
        slate: {
          950: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      dropShadow: {
        glow: '0 0 15px rgba(56, 189, 248, 0.65)',
      },
    },
  },
  plugins: [],
}
