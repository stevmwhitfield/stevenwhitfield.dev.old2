/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      background: "#323742",
      textPrimary: "#e3e3e3",
      textSecondary: "#d2d2d2",
      green: "#36e2d4",
    },
    fontFamily: {
      sans: ["Open Sans", "Roboto", "sans-serif"],
      serif: ["Bitter", "serif"],
      mono: ["Source Code Pro", "monospace"],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
  },
  plugins: [],
};

