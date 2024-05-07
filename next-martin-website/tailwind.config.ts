import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["selector", "[data-mode='dark']"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "dark-bg": "#070A09",
      primary: "#00B140",
      "dark-secondary": "#18996C",
      "dark-text": "#DBF2EA",
      "dark-accent": "#29EFAD",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
