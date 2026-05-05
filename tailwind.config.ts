import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0F",
        cream: "#FAF7F2",
        rose: {
          50: "#FFF5F7",
          100: "#FFE4EA",
          200: "#FBC9D4",
          300: "#F5A3B6",
          400: "#EC7E97",
          500: "#E0577A",
          600: "#C53D63",
          700: "#9E2B4E"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(11,11,15,0.15)"
      }
    }
  },
  plugins: []
};

export default config;
