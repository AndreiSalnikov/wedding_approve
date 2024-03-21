import type { Config } from "tailwindcss";
const config: Config = {

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'comic-neue': ['Comic Neue', 'sans-serif'],
      'scriptorama': ['Scriptorama', 'sans-serif'],
      'comforta': ['Comfortaa-VariableFont_wght','sans-serif']
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'welcome': "url('/img/welcome.png')",
        'rsvp': "url('/img/rsvp.png')",
        'schedule': "url('/img/schedule.png')"
      ,
      },
      colors: {
        brown: "rgb(89, 78, 66)",
        whitealpha: "rgba(255, 255, 255, 0.7)",
        lightbrown: "rgb(120, 107, 102)"
      },
    },
  },
  plugins: [],
};
export default config;
