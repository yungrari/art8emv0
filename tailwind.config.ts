import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        "data-mono": "var(--data-mono)",
        "reforma-sans": "var(--reforma-sans)",
        "xhdd-compressed": "var(--xhdd-compressed)",
      },
    },
  },
  plugins: [],
} satisfies Config;
