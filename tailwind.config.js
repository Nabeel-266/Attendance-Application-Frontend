/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "481px",
        "2xs": "376px",
      },
    },
    fontFamily: {
      montAlter: ["'Montserrat Alternates'", "sans-serif"],
      mont: ["'Montserrat'", "sans-serif"],
      quick: ["'Quicksand'", "sans-serif"],
    },
    backgroundImage: {
      "login-bg-texture": "url('/src/assets/login-bg.png')",
    },
  },
  plugins: [],
};
