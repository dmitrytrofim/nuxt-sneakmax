/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
  './components/**/*.{js,vue,ts}',
  './layouts/**/*.vue',
  './pages/**/*.vue',
  './plugins/**/*.{js,ts}',
  './app.vue',
  './error.vue',
 ],
 theme: {
  extend: {},
  fontFamily: {
   sans: ['', 'sans-serif'],
  },
  fontSize: {
   16: 'var(--sz-16)',
  },
  colors: {
   trp: 'transparent',
  },
  fontWeight: {
   300: '300',
   400: '400',
   500: '500',
   600: '600',
   700: '700',
   800: '800',
   900: '900',
  },
  lineHeight: {
   n: 'normal',
  },
 },
 plugins: [],
};
