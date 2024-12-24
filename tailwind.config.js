/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        accent: '"Montserrat", serif',
        oswald: '"Oswald", serif',
      },
      backgroundImage: {
        // "custom-bg": 'url("/src/assets/images/pattern-bg.png")',
        // "custom-heading": 'url("/src/assets/images/banner.webp")',
        // "home-banner": 'url("/src/assets/images/home-banner.jpg")',
      },
      colors: {
        primary: "#050B21",
        // secondary: "#272f37",
        // accent: "#121212",
      },
    },
  },
  plugins: [daisyui],
};
