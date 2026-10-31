/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#17243A',
          dark: '#0F1827',
          light: '#23324E',
        },
        cobalt: {
          DEFAULT: '#315CE8',
          hover: '#2549C4',
          light: '#537BF0',
        },
        ivory: {
          DEFAULT: '#F7F5EF',
          dark: '#EFECE2',
          light: '#FCFBF8',
        },
        softblue: {
          DEFAULT: '#E9EEFF',
          dark: '#D4DEFF',
        },
        amber: {
          DEFAULT: '#E9AA58',
          hover: '#D49645',
        },
        coral: {
          DEFAULT: '#E98977',
          hover: '#D47563',
        },
        body: {
          DEFAULT: '#303746',
          muted: '#727987',
        },
        surface: {
          border: '#E7E5DF',
        }
      },
      fontFamily: {
        heading: ['Manrope', 'DM Sans', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        '7xl': '80rem',
      }
    },
  },
  plugins: [],
}
