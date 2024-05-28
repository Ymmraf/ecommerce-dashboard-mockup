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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "coal" : "#383634",
        "leaf" : "#4C7C7D",
        "tomato" : "#E45959",
        "cream" : "#EDEAE7",
        "darkcream" : "#b3b0ad"
      },
      gridTemplateColumns: {
        "store-lg" : "1fr 3fr"
      }
    },
  },
  plugins: [],
};
export default config;
