/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'lluvia-sky': '#87CEEB', // Contoh Sky Blue
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"], // Memaksa hanya Light Mode
    darkTheme: "light", // Mencegah fallback ke dark mode dari sistem OS
  },
}