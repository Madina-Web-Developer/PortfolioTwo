/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    container:{
      center: true,
      padding:{
        DEFAULT:'15px',
        sm:'20px',
        md:'20px',
      }
       
    },

    fontFamily:{
      'Lora':["Lora", "serif"],
      'Monstrant':["Montserrat", "serif"],
      'inter': ["Inter", "serif"]
    },

    extend: {},
  },
  plugins: [],
}