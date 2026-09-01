/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6C63FF",
        secondary: "#FF6584",
        accent: "#43D9AD",
        dark: "#0F0F1A",
        "dark-card": "#1A1A2E",
        "dark-border": "#2A2A45",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        float: "float 3s ease-in-out infinite",
        "gradient-x": "gradientX 4s ease infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        glow: {
          from: { boxShadow: "0 0 20px #6C63FF55" },
          to: { boxShadow: "0 0 40px #6C63FF99, 0 0 80px #6C63FF33" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
    },
  },
  plugins: [],
};
