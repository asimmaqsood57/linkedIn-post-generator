/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/primereact/**/*.{js,ts,jsx,tsx}", // Include PrimeReact components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
