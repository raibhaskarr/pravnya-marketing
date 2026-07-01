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
        forest: {
          DEFAULT: "#2C5F3E",
          light: "#3D7A52",
          dark: "#1A3D27",
          subtle: "#EBF3EE",
        },
        sage: {
          DEFAULT: "#7A9E8A",
          light: "#9AB5A5",
          subtle: "#F0F5F2",
        },
        gold: {
          DEFAULT: "#B8935A",
          light: "#CBA876",
          subtle: "#FAF3E8",
        },
        background: "#F7F4EF",
        surface: "#FFFFFF",
        "surface-raised": "#F0EDE6",
        "dark-surface": "#1C2B22",
        ink: {
          DEFAULT: "#1C1C1A",
          secondary: "#5A5A56",
          tertiary: "#8A8A84",
        },
        border: {
          DEFAULT: "#E4DDD0",
          strong: "#C8BFB0",
          focus: "#2C5F3E",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      borderRadius: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "32px",
      },
      boxShadow: {
        xs: "0 1px 2px rgba(28,28,26,0.06)",
        s: "0 2px 6px rgba(28,28,26,0.08), 0 1px 2px rgba(28,28,26,0.04)",
        m: "0 4px 16px rgba(28,28,26,0.09), 0 2px 4px rgba(28,28,26,0.05)",
        l: "0 8px 28px rgba(28,28,26,0.11), 0 4px 8px rgba(28,28,26,0.06)",
        green: "0 8px 24px rgba(44,95,62,0.22)",
        gold: "0 6px 20px rgba(184,147,90,0.24)",
      },
    },
  },
  plugins: [],
};

export default config;

