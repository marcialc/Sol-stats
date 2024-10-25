import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{tsx,ts,jsx,js,html}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "#FAF9F6",
        dark: {
          50: "#fbfbfb",
          100: "#f0f0f0",
          200: "#dddddd",
          300: "#c2c2c2",
          400: "#a0a0a0",
          500: "#777777",
          600: "#464646",
          700: "#0d0d0d",
          800: "#060606",
          900: "#010101",
          950: "#000000",
        },
        green: {
          50: "#fcfefd",
          100: "#f2fcf9",
          200: "#e3f9f1",
          300: "#cdf4e6",
          400: "#b1eed7",
          500: "#8ee6c6",
          600: "#65ddb1",
          700: "#36d399",
          800: "#1a7856",
          900: "#0d3d2c",
          950: "#092a1e",
        },
        pink: {
          50: "#fffcfd",
          100: "#fef3f9",
          200: "#fce5f1",
          300: "#fad1e6",
          400: "#f7b7d7",
          500: "#f497c6",
          600: "#f072b1",
          700: "#ec4699",
          800: "#951052",
          900: "#480828",
          950: "#2e051a",
        },
        orange: {
          50: "#fffcfc",
          100: "#fff4f4",
          200: "#ffe5e5",
          300: "#ffd1d1",
          400: "#ffb7b7",
          500: "#ff9898",
          600: "#ff7272",
          700: "#ff4747",
          800: "#ad0000",
          900: "#520000",
          950: "#330000",
        },
        gray: {
          50: "#f9fdff",
          100: "#e9f6ff",
          200: "#cdebff",
          300: "#a6dbff",
          400: "#74c7ff",
          500: "#36afff",
          600: "#008eed",
          700: "#005c99",
          800: "#003a60",
          900: "#00253e",
          950: "#001f33",
        },
        purple: {
          50: "#fefcfe",
          100: "#fbf3fb",
          200: "#f6e4f6",
          300: "#efcfef",
          400: "#e6b4e6",
          500: "#db93db",
          600: "#ce6dce",
          700: "#bf40bf",
          800: "#6a236a",
          900: "#371237",
          950: "#260d26",
        },
      },
    },
  },
  daisyui: {
    themes: ["light", "dark", "retro"],
  },

  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};

export default config;
