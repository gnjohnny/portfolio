/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/*.js"],
  theme: {
    screens:{
      sm: "425px",
      md: "768px",
      lg: "1440px",
      xl: "2560px"
    },
    extend: {
      keyframes: {
        slide: {
          "from": {
            opacity: "0",
            right: "-110px"
          },
          "to": {
            opacity: "1",
            right: "40px"
          }
        },
        pulser:{
          "from":{
            opacity: "0"
          },
          "to":{
            opacity: "1"
          }
        }
      },
      animation: {
        slide: "slide .7s ease-in-out forwards",
        pulser: "pulser 3s ease-in-out forwards",
      }
    },
  },
  plugins: [],
}

