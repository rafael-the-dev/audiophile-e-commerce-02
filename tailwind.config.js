const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          400: '#fbaf85',
          500: '#D87D4A'
        },
        gray: {
          200: "#FAFAFA",
          300: '#F1F1F1'
        },
        zinc: {
          800: '#101010'
        }
      },
      fontFamily: {
        roboto: ["Roboto", defaultTheme.fontFamily.sans ]
      }
    },
    screens: {
      'sm': '600px',
      // => @media (min-width: 640px) { ... }

      'md': '900px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
