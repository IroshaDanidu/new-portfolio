/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/utlits/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "Söhne",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        // ChatGPT-inspired neutral palette
        chat: {
          bg: "#ffffff",
          panel: "#f7f7f8",
          sidebar: "#f9f9f9",
          sidebarHover: "#ececec",
          sidebarActive: "#e3e3e3",
          border: "#ececec",
          borderStrong: "#e5e5e5",
          divider: "#ececec",
          ink: "#0d0d0d",
          subtle: "#5d5d5d",
          muted: "#8e8ea0",
          assistant: "#f7f7f8",
          user: "#ffffff",
          accent: "#10a37f",
          accentHover: "#0e8e6e",
          offerBg: "#e9e7ff",
          offerInk: "#5e58c1",
        },
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 1px 3px 0 rgba(0,0,0,0.04), 0 1px 2px -1px rgba(0,0,0,0.04)",
        card: "0 2px 8px -2px rgba(0,0,0,0.06), 0 4px 16px -4px rgba(0,0,0,0.04)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.4s ease-out both",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
