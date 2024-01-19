/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         container: {
            center: true,
            padding: {
               DEFAULT: '1rem',
               //  sm: '2rem',
               //  lg: '4rem',
               //  xl: '5rem',
               //  '2xl': '6rem',
            },
         },
         colors: {
            primary: '#27668C',
         },
         screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
         },
      },
   },
   plugins: [],
}
