/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        "home":"url('/assets/bg.png')"
      },
      boxShadow:{
        "btn":"0px 0px 10px 2px rgba(0,0,0, 0.1)"
      }
    },
  },
  plugins: [],
}

