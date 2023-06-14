/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    colors:{
      'darkBlue' : 'hsl(209, 23%, 22%)',
      'veryDarkBlue' : 'hsl(207, 26%, 17%)',
      'veryDarkBlueText' : 'hsl(200, 15%, 8%)',
      'darkGray' : 'hsl(0, 0%, 52%)',
      'veryLightGray' : 'hsl(0, 0%, 98%)',
      'white' : 'hsl(0, 0%, 100%)'
    },
    screens:{
      'xs' : '375px',
      'sm' : '640px',
      'md' : '768px',
      'lg' : '1024px',
      'xl' : '1280px',
      '2xl' : '1536px'
    },
    container: {
      center: true,
      padding: '1rem',
    },
    
  },
  plugins: [],
}

