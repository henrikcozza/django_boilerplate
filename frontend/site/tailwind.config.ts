import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'promo-banner': "url('../public/assets/images/promo-oetker.jpg')",
        'promo-banner-mobile': "url('../public/assets/images/promo-oetker-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
