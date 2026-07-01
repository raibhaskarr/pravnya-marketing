import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0E1410",
          surface: "#141D17",
          raised: "#1C2820",
          inset: "#0B1009",
          subtle: "#162417",
        },
        forest: {
          DEFAULT: "#2E7D5B",
          bright: "#3D9E73",
          dim: "#1C5A3D",
          glow: "rgba(46,125,91,0.18)",
        },
        sage: {
          DEFAULT: "#7A9E8A",
          dim: "#4A6A58",
        },
        gold: {
          DEFAULT: "#C49A5A",
          dim: "#8A6A35",
        },
        text: {
          primary: "#F0EDE6",
          secondary: "#9AB5A5",
          tertiary: "#6B8C7A",
          code: "#B8D4C4",
          placeholder: "#3A5245",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.07)",
          strong: "rgba(255,255,255,0.14)",
          accent: "rgba(46,125,91,0.35)",
        },
        light: {
          bg: "#F0EDE6",
          text: "#1A3328",
          muted: "#5A7068",
          border: "#C8BFB0",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-plus-jakarta)", "Inter", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-jetbrains)", "SFMono-Regular", "Consolas", "monospace"],
      },
      borderRadius: {
        xs: "4px",
        sm: "6px",
        md: "10px",
        lg: "14px",
        xl: "20px",
      },
      boxShadow: {
        glowXs: "0 0 0 1px rgba(255,255,255,0.04)",
        glowS: "0 0 0 1px rgba(255,255,255,0.06), 0 2px 8px rgba(0,0,0,0.40)",
        glowM: "0 0 0 1px rgba(255,255,255,0.08), 0 4px 20px rgba(0,0,0,0.50)",
        glowForest: "0 0 0 1px rgba(46,125,91,0.40), 0 0 20px rgba(46,125,91,0.15)",
        glowGold: "0 0 0 1px rgba(196,154,90,0.35), 0 0 12px rgba(196,154,90,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
