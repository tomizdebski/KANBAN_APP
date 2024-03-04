import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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
      boxShadow: {
        '3xl': '0 5px 100px 10px ',
      },
      colors: {
        fiolet: "#645FC6",
        blue: "#49C4E7",
        green: "#67E3AF",
        deep_gray: "#21212D",
        dark_gray: "2C2C38",
        gray: "656567",
        light_gray: "E2E3E7",
        light_blue: "E2F7FE",
    
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      spacing: {},
      fontFamily: {
        saira: "'Saira Condensed'",
      
      },
    },
    fontSize: {
      large: "36px",
      medium: "32px",
      body_large: "16px",
      body_medium: "14px",
      inherit: "inherit",
    },
  },
  plugins: [],
};
export default config;
