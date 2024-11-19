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
        akaflow: {
          purple: {
            DEFAULT: "#9b87f5",
            dark: "#7E69AB",
            light: "#D6BCFA",
          },
          aqua: {
            DEFAULT: "#7DD3FC",
            dark: "#0EA5E9",
            light: "#BAE6FD",
          },
          black: "#1A1F2C",
          gold: {
            DEFAULT: "#FFD700",
            dark: "#DAA520",
            light: "#FFF7CC",
          },
        },
        primary: {
          DEFAULT: "#9b87f5",
          foreground: "#FFFFFF",
        },
        task: {
          todo: "#94A3B8",
          progress: "#F59E0B",
          completed: "#10B981",
        },
        premium: {
          gold: {
            light: "#FFD700",
            dark: "#DAA520",
          },
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
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "metal-shine": {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        "flame-pulse": {
          "0%, 100%": { filter: "brightness(100%)" },
          "50%": { filter: "brightness(120%) hue-rotate(10deg)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out",
        shimmer: "shimmer 2s infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "metal-shine": "metal-shine 3s linear infinite",
        "flame-pulse": "flame-pulse 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
      },
      backgroundImage: {
        "premium-gradient": "linear-gradient(135deg, #FFD700, #B8860B)",
        "parchment": "url('/images/parchment.png')",
        "metal": "linear-gradient(45deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)",
        "dragon-scale": "url('/images/dragon-scale.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;