/** @type {import('tailwindcss').Config} */

const mapleColors = {
  // Primary
  'primary': '#1F2937',
  // Secondary
  'secondary': '#9CA3AF',
  // Neutral
  // Background
  // Accent
  'accent-green': '#AEF378',
  'accent-blue': '#476EF9'
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {...mapleColors}
    },
      backgroundImage: {
        'auth': "url('@/assets/images/Pattern.png')",
      }
  },
  plugins: [],
}

