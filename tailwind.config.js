/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightColor: '#606b56',
        mediumColor: '#515a48',
        darkColor: '#161914',
        textColor: '#eeeeee'
      }
      
    },
    fontFamily: {
      signature: ["Great Vibes"]
    },
  },
  plugins: [],
}



