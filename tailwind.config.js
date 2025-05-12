/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Custom colors
        "custom-yellow": "rgba(250, 190, 76, 1)",
        "custom-navy": "rgba(54, 57, 88, 1)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
