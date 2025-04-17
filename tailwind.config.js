/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8B6E4E", // 木の温かみを感じる茶色
          light: "#A58E70",
          dark: "#6B533C",
        },
        secondary: {
          DEFAULT: "#4A6059", // 落ち着いた緑
          light: "#607D76",
          dark: "#374840",
        },
        accent: {
          DEFAULT: "#D9A566", // アクセントカラー（70:25:5の法則で5%使用）
        },
        natural: {
          light: "#F5F2ED", // 明るい自然色
          DEFAULT: "#E5E0D5", // 自然な色合い
          dark: "#D5CFC0", // 少し暗めの自然色
        },
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', "sans-serif"],
        serif: ['"UD明朝"', "serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.5" }],
        sm: ["0.875rem", { lineHeight: "1.5" }],
        base: ["1rem", { lineHeight: "1.7" }],
        lg: ["1.125rem", { lineHeight: "1.6" }],
        xl: ["1.25rem", { lineHeight: "1.5" }],
        "2xl": ["1.5rem", { lineHeight: "1.4" }],
        "3xl": ["1.875rem", { lineHeight: "1.3" }],
        "4xl": ["2.25rem", { lineHeight: "1.2" }],
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
    },
  },
  plugins: [],
};
