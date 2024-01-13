/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0768B5",
        skyBlue: "#2F9FF8",
        amberBlack: "#072D4B",
      },
      borderRadius: {
        theme: "4px",
      },
    },
  },
  plugins: [],
};
