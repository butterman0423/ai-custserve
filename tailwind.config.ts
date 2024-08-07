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
        "primary":    '#022c22',  // emerald-950
        "secondary":  '#134e4a',  // teal-900
        "accent":     '#22d3ee',  // cyan-400
        //"accent":   '#06b6d4',  // cyan-500
        "text":       '#ffffff',  // white
      },

      backgroundColor: {
        "primary":    '#022c22',  // emerald-950
        "secondary":  '#134e4a',  // teal-900
        "accent":     '#22d3ee',  // cyan-400
        //"accent":   '#06b6d4',  // cyan-500
        "text":       '#ffffff',  // white
      }
    },
  },
  plugins: [],
};
export default config;
