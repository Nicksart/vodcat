import type { Config } from "tailwindcss";
export interface BreakpointValues {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
  "3xl": string;
}
export const screens = {
  sm: "480px",
  md: "830px",
  lg: "1064px",
  xl: "1180px",
  "2xl": "1340px",
  "3xl": "1920px",
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: "#F91700",
        customYellow: "#F8DE01",
        customBlue: "#0074FD",
        customPurple: "#C200C3",
        customBrown: "#4A2805",
      },
      fontFamily: {
        londrina: ["var(--font-londrina)", "sans-serif"],
      },
      padding: {
        container: "80px",
      },
      keyframes: {
        moveCloud: {
          "0%": { transform: "translateX(100vw)" }, 
          "100%": { transform: "translateX(-450px)" },
        },
      },
      animation: {
        "cloud-move": "moveCloud 15s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
