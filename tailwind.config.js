/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // inclut tous les fichiers React
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb", // couleur principale
          600: "#2563eb",
          700: "#1d4ed8",
        },
        secondary: "#1e40af", // couleur secondaire
        accent: "#ff8c42",    // couleur accent
      },
    },
  },
  plugins: [],
};