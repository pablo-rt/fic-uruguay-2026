/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0E1B3D',
          deep: '#050B23',
          soft: '#1A2954',
        },
        sun: '#F4C430',
        teal: '#3DBCBC',
        magenta: '#C589B7',
        flame: '#E85A2C',
        crimson: '#B83A3A',
        violet: '#8E5BA8',
        cream: '#FFF9E6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Archivo Black"', 'Impact', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
        'spin-reverse': 'spin-reverse 3s linear infinite',
        'half-rotate': 'half-rotate 8s ease-in-out infinite',
        'color-cycle': 'color-cycle 6s linear infinite',
        'marquee': 'marquee 30s linear infinite',
        'loader-fade': 'loader-fade 0.6s ease-out forwards',
      },
      keyframes: {
        'spin-reverse': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(-360deg)' },
        },
        'half-rotate': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
        },
        'color-cycle': {
          '0%, 100%': { color: '#F4C430' },
          '25%': { color: '#3DBCBC' },
          '50%': { color: '#E85A2C' },
          '75%': { color: '#C589B7' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'loader-fade': {
          'from': { opacity: '1', visibility: 'visible' },
          'to': { opacity: '0', visibility: 'hidden' },
        },
      },
    },
  },
  plugins: [],
}
