/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/src/assets/images/user.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}