import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#FFFFFF', // White as primary color
        secondary: '#3498db', // Blue as secondary color
        graycolor: '#F0F0F0', // Blue as secondary color
      },
      boxShadow: {
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        // Add more custom font families as needed
      },
      backgroundColor: {
        'wellness-green': '#4CAF50', // Change this color to the shade of green you want
        'wellness-dark-green': '#388E3C', // Change this color to a darker shade if needed
      },
    },
  },
  plugins: [],
};
export default config;
