/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: "#FCA311",
          gray: {
            100: "#111111",
            150: "#151515",
            200: "#222222",
          },
        },
      },
    },
  },
  plugins: [],
}
