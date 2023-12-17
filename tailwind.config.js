/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--nutui-color-primary)",
        background: "var(--nutui-gray-2)",
      },
    },
  },
  plugins: [],
};
