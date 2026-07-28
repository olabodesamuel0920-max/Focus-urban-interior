import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1A1C23",
        ember: "#D44007",
        canvas: "#F8F7F4",
        copy: "#202020",
        muted: "#707070",
      },
      fontFamily: {
        display: ["Code Next", "Arial Narrow", "Helvetica Neue", "sans-serif"],
        body: ["Montserrat", "Avenir Next", "Helvetica Neue", "sans-serif"],
      },
      letterSpacing: {
        editorial: "-0.045em",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
