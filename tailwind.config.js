/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./node_modules/flowbite/**/*.js"
],
  theme: {
    extend: {
      boxShadow: {
        onboardingShadow: '0px 3px 11px rgba(0, 0, 0, 0.06), 0px 10px 15px rgba(0, 0, 0, 0.03)',
      },
      colors: {
        primarybtn: '#60A498',
        primarytext: '#60A498',
        pirmaryColor:  '#60A498',
        primaryBackground: '#F1FFFD',
        hoverPrimary: '#DCFCE7',
        NavBarText: '#4B5563'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}