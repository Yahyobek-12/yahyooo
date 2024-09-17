/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'ss': '400px',
        'sm': '640px',   // Small devices (phones)
        'md': '768px',   // Medium devices (tablets)
        'lg': '1042px',  // Large devices (laptops/desktops)
        'xl': '1280px',  // Extra large devices (large laptops/desktops)
        '2xl': '1536px', // Extra extra large devices (larger screens)
      },
    },
  },
  plugins: [],
}
