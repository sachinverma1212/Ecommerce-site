/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5",
        secondary: "#7c3aed",
        accent: "#f59e0b",
        success: "#10b981",
        warning: "#f97316",
        error: "#ef4444",
        info: "#3b82f6",
        background: "#f8fafc",
        surface: "#ffffff",
        text: {
          primary: "#1e293b",
          secondary: "#64748b",
        },
        border: "#e2e8f0",
      },
    },
  },
  plugins: [],
}; 