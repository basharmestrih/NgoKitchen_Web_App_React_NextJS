/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html", 
    "./src/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx}", // Also include app dir if you're using App Router
  ],
  theme: {
    extend: {
      fontFamily: {
       ubuntu: ['Ubuntu', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        lobster: ['Lobster', 'cursive'],
        poetsen: ['Poetsen One', 'cursive'],
        saira: ['"Saira"', 'sans-serif'],
        
      },
    },
  },
  plugins: [],
};
