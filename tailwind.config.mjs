/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        dm: ["DM Serif Display", "sans-serif"],
        kiwi: ["Kiwi Maru", "sans-serif"],
      },
      colors: {
        main: "#333333",
      },
    },
  },
  plugins: [],
};
