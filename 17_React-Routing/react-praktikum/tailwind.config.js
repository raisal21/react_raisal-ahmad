/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui"
import forms from "@tailwindcss/forms"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        jost:['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [
    daisyui,
    forms,
  ],
}