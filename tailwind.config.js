module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        backdrop: '#121212',
        primary: '#1db954',
        active: '#282828',
        link: '#b3b3b3',
        footer: '#181818'
      },
      fontSize: {
        s: '0.813rem'
      },
      boxShadow: {
        spotify: '0 2px 4px 0 rgb(0 0 0 / 20%)'
      },
      animation: {
        loader: 'loader 0.6s infinite alternate'
      },
      keyframes: {
        loader: {
          to: {
            opacity: 0.1,
            transform: 'translate3d(0, -1rem, 0)'
          }
        }
      },
    },
  },
  variants: {
    scrollbar: ['rounded']
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar'),
  ]
}
