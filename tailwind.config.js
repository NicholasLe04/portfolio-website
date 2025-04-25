/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {},
  },
  plugins: [
    require('taos/plugin')
  ],
  variants: {
    extend: {
        display: ["group-hover"],
    },
  },
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: ['./**/*.{html,js}'],
  },
}