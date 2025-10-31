import withMT from "@material-tailwind/react/utils/withMT.js";

export default withMT({
  darkMode:"class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rotateBorder: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        rotateBorder: "rotateBorder 4s linear infinite",
      },
      colors: {
        gradient: {
          sky: "#38bdf8",
          violet: "#8b5cf6",
          peach: "#fb923c",
        },

        light: {
          background: "#ffffff",
          foreground: "#1a1a2e",
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

        // 🌙 Dark Theme
        dark: {
          background: "#0f172a",
          foreground: "#f1f5f9",
          card: "#1e293b",
          "card-foreground": "#f1f5f9",
          popover: "#1e293b",
          "popover-foreground": "#f1f5f9",
          primary: "#f1f5f9",
          "primary-foreground": "#0f172a",
          secondary: "#334155",
          "secondary-foreground": "#f1f5f9",
          muted: "#334155",
          "muted-foreground": "#94a3b8",
          accent: "#475569",
          "accent-foreground": "#f1f5f9",
          destructive: "#ef4444",
          "destructive-foreground": "#f1f5f9",
          border: "rgba(148, 163, 184, 0.2)",
          input: "transparent",
          "input-background": "#1e293b",
          "switch-background": "#475569",
          ring: "#a78bfa",
          chart: {
            1: "#0ea5e9",
            2: "#a78bfa",
            3: "#fb923c",
            4: "#10b981",
            5: "#fbbf24",
          },
          sidebar: {
            DEFAULT: "#1e293b",
            foreground: "#f1f5f9",
            primary: "#a78bfa",
            "primary-foreground": "#f1f5f9",
            accent: "#334155",
            "accent-foreground": "#f1f5f9",
            border: "#334155",
            ring: "#a78bfa",
          },
        },
      },

      borderRadius: {
        sm: "calc(0.625rem - 4px)",
        md: "calc(0.625rem - 2px)",
        lg: "0.625rem",
        xl: "calc(0.625rem + 4px)",
        DEFAULT: "0.625rem",
      },

      fontSize: {
        base: "16px",
      },

      fontWeight: {
        medium: "500",
        normal: "400",
      },
      backgroundImage: {
        "gradient-main": "linear-gradient(to right, #8b5cf6, #fb923c)", // violet → peach
        "gradient-secondery":
          "linear-gradient(to right, #38bdf8, #8b5cf6, #fb923c)", // sky → violet → peach
      },
    },
  },
  plugins: [],
});
