/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'ss': '400px',
        'sm': '640px',   
        'md': '768px',  
        'lg': '1042px',  
        'xl': '1280px',  
        '2xl': '1536px', 
      },
      colors: {
        'greens': "#00CEA0",
        'kok': '#00A4A5'
      }
    },
  },
  plugins: [],
}
