/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       screens: {
        'xs': '480px',
      },
      container: {
        center: true,
        padding: '1rem',
      }
    }
  },
  plugins: [],
}

