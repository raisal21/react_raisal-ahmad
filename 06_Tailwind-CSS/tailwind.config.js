/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  mode: 'jit',
  content: ["./praktikum/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '1rem': '1rem',
        '0.5rem': '0.5rem',
      },
      colors: {
        'link-color': '#0d6efd', 
        'link-hover-color': '#0a58ca', 
        'nav-link-disabled': '#6c757d',
      },
      fontFamily: {
        'jost': ['Jost', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        '4xl': '31px',
        'lg': '18px',
      },
      fontWeight: {
        'medium': 500,
        'light': 300,
      },
      colors: {
        'custom-gray': '#212529',
      },
      lineHeight: {
        'custom': '38.4px',
      },
      width: {
        'custom': '144px', // Menambahkan lebar kustom
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

