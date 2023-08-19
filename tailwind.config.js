/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        black: "#120e16",
        indigo: {
          light: "#9f55ff",
          dark: "#7000ff"
        }
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35"
      },
      screens: {
        xs: "450px",
        as: "990px",
        hs: "1024px"
      },
      backgroundImage: {
        // "hero-pattern": "url('/src/assets/herobg.jpg')"
      }
    }
  },
  variants: {
    scrollbar: ["rounded"]
  },
  plugins: [require("tailwind-scrollbar")]
};
