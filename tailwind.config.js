/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gradient: {
          sky: "#38bdf8",
          violet: "#8b5cf6",
          peach: "#fb923c",
        },
        card: "#ffffff",
        "card-foreground": "#1a1a2e",
        popover: "#ffffff",
        "popover-foreground": "#1a1a2e",
        primary: "#1a1a2e",
        "primary-foreground": "#ffffff",
        secondary: "#f3f4f6",
        "secondary-foreground": "#1a1a2e",
        muted: "#f3f4f6",
        "muted-foreground": "#6b7280",
        accent: "#e5e7eb",
        "accent-foreground": "#1a1a2e",
        destructive: "#ef4444",
        "destructive-foreground": "#ffffff",
        border: "rgba(0, 0, 0, 0.1)",
        input: "transparent",
        "input-background": "#f9fafb",
        "switch-background": "#d1d5db",
        ring: "#8b5cf6",
        chart: {
          1: "#38bdf8",
          2: "#8b5cf6",
          3: "#fb923c",
          4: "#10b981",
          5: "#f59e0b",
        },
        sidebar: {
          DEFAULT: "#fafafa",
          foreground: "#1a1a2e",
          primary: "#1a1a2e",
          "primary-foreground": "#ffffff",
          accent: "#f3f4f6",
          "accent-foreground": "#1a1a2e",
          border: "#e5e7eb",
          ring: "#8b5cf6",
        },
      },
      borderRadius: {
        DEFAULT: "0.625rem",
      },
      fontWeight: {
        medium: "500",
        normal: "400",
      },
      backgroundImage: {
        "gradient-main": "linear-gradient(to right, #8b5cf6, #fb923c)", // violet → peach
        "gradient-secondery": "linear-gradient(to right, #38bdf8, #8b5cf6, #fb923c)", // sky → violet → peach
      },
    },
  },
  plugins: [],
});
