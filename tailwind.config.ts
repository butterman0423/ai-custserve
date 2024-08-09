import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        "primary":    '#4297a0',
        "secondary":  '#f4eae6',
        "accent":     '#2f5061',
        "text":       '#ffffff',
        "textfield": "#2f5061"
      },
      borderRadius: {
        "userText": "0.5rem 0 0 0.5rem",
        "botText": "0 0.5rem 0.5rem 0"
      }
    },
  },
  plugins: [],
};
export default config;
