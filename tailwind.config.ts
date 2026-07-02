import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "Poppins", "sans-serif"]
      },
      colors: {
        bg: "#09090B",
        panel: "#111218",
        border: "#232533",
        accent: "#CBFF3C",
        muted: "#B2B6C8",
        brand: {
          DEFAULT: "#6A0DAD",
          hover: "#55088A",
          light: "#8B3BD4",
          dark: "#2B0A52",
          deeper: "#1A0633"
        },
        surface: {
          light: "#F5F5F5",
          muted: "#ECECEC"
        }
      },
      fontSize: {
        "hero": ["3.25rem", { lineHeight: "1.05", letterSpacing: "0.02em" }],
        "section": ["2rem", { lineHeight: "1.15", letterSpacing: "0.04em" }]
      },
      boxShadow: {
        card: "0 4px 24px rgba(0, 0, 0, 0.08)",
        review: "0 2px 16px rgba(0, 0, 0, 0.06)"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(203,255,60,0.25), 0 8px 30px rgba(0,0,0,0.35)"
      }
    }
  },
  plugins: []
};

export default config;
