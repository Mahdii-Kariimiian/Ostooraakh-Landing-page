/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#154865" ,
        secondary: "##c96f20" ,
      } , 
      backgroundImage : {
        mobile:' url("/mobile-background.jpg")',
        desktop: 'url("/Background.jpg")',
      }
    },
  },
  plugins: [],
}