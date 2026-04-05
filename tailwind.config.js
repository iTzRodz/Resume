/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        bg: {
          base:     '#1B1B25',
          surface:  '#23232F',
          elevated: '#2C2C3A',
          overlay:  '#13131A',
        },
        text: {
          primary:   '#FFF2E7',
          secondary: '#B8B0A8',
          muted:     '#8B8494',
          inverse:   '#1B1B25',
        },
        accent: {
          DEFAULT: '#6200FF',
          hover:   '#7A1FFF',
        },
      },
    },
  },
  plugins: [],
}
