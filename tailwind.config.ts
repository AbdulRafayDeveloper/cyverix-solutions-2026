import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["var(--font-syne)"],
        "dm-sans": ["var(--font-dm-sans)"],
        "jetbrains-mono": ["var(--font-jetbrains-mono)"],
      },
      colors: {
        background: "#0A0A0F",
        primary: "#00FFB2",
        secondary: "#7B5EA7",
        surface: "#12121A",
        border: "#1E1E2E",
        "text-primary": "#F0F0FF",
        "text-secondary": "#8888AA",
      },
      backgroundImage: {
        "cta-gradient": "linear-gradient(135deg, #00FFB2 0%, #00C8FF 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
