import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        medieval: {
          black: "#1A1414",
          gold: {
            DEFAULT: "#FFD700",
            dark: "#B8860B",
            light: "#FFF7CC",
          },
          blood: {
            DEFAULT: "#8B0000",
            dark: "#4A0404",
            light: "#FF6B6B",
          },
          metal: {
            DEFAULT: "#71797E",
            dark: "#36454F",
            light: "#B8C4C9",
          },
          parchment: {
            DEFAULT: "#F4E4BC",
            dark: "#D4B483",
            light: "#FFF8E7",
          },
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#9b87f5",
          foreground: "#FFFFFF",
        },
        task: {
          todo: "#94A3B8",
          progress: "#F59E0B",
          completed: "#10B981",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        logo: ["Poppins", "sans-serif"],
        medieval: ["Cinzel", "serif"],
        scroll: ["MedievalSharp", "cursive"],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out",
        shimmer: "shimmer 2s infinite",
      },
      backgroundImage: {
        "premium-gradient": "linear-gradient(135deg, #FFD700, #B8860B)",
        "parchment": "url('/images/parchment.png')",
        "parchment-dark": "url('/images/parchment-dark.png')",
        "parchment-light": "url('/images/parchment-light.png')",
        "dragon-scale": "url('/images/dragon-scale.png')",
        "dragon-scale-dark": "url('/images/dragon-scale-dark.png')",
        "dragon-scale-light": "url('/images/dragon-scale-light.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;