/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#CEE34C',
        'secoundary': '#E11515',
        'text_primary': '#939393',
      },
    },
  },
  plugins: [],
}

