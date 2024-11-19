import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        medieval: ["MedievalSharp", "serif"],
      },
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
      },
      backgroundImage: {
        // Texturas base
        "texture-parchment": "url('/images/textures/parchment.png')",
        "texture-dragon": "url('/images/textures/dragon-scale.png')",
        // Elementos místicos
        "texture-crystal": "url('/images/textures/crystal-cave.png')",
        "texture-portal": "url('/images/textures/mystic-portal.png')",
        "texture-wisp": "url('/images/textures/ethereal-wisp.png')",
        // Elementos naturais
        "texture-fire": "url('/images/textures/fiery-orb.png')",
        "texture-ice": "url('/images/textures/frost-spike.png')",
        "texture-lava": "url('/images/textures/lava-flow.png')",
        // Ambientes
        "texture-forest": "url('/images/textures/forest-glade.png')",
        "texture-ruins": "url('/images/textures/ancient-ruins.png')",
        "texture-clouds": "url('/images/textures/dark-clouds.png')",
        // Itens
        "texture-coins": "url('/images/textures/golden-coins.png')",
        "texture-dagger": "url('/images/textures/shadow-dagger.png')",
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out",
        "metal-shine": "metal-shine 3s linear infinite",
        "flame-pulse": "flame-pulse 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
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
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;