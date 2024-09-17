module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        primary: {
          light: "#C97E38",
          DEFAULT: "#9C5D22",
          dark: "#79481A",
        },
        secondary: {
          DEFAULT: "#8FBB7F",
          accent: "#C97E38",
        },
        background: "#FCEFE3", // off-white
        text: {
          bg: "#FFCA9A",
          light: "#746F78", // a lighter shade of gray for less emphasis
          DEFAULT: "#383231", // dark gray
          dark: "#150324", // an even darker gray for high contrast
        },
      },
    },
  },
  plugins: [],
};
