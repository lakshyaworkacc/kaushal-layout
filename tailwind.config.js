/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "menu": "#0d0d0d",
        "contactLeft": "#272a34",
      },
      backgroundImage: {
        "nyawithGovernor": "url('/HeroCarousel/ONE.jpg')",
      },
    },
  },
  plugins: [],
}
