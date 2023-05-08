/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'abstract-bg' : "url('../public/website bg.jpg')"
      },
      animation: {
        shine: "shine 1s",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
      height: {
        '128': '28rem',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'gray': '#4b5563',
        'white': '#ffffff',
        'ylw': '#F3C529',
        'rd' : '#E13F18',
        'bl' : '#2256DD',
        'lbl' : '#4678E8', 
        'softblck' : '#414a4c',
        'softgray' : '#F5F2EA'
      },
    },
  },
  plugins: [],
}
