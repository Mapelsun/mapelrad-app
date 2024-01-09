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
  'accent-blue': '#476EF9',
  'accent-gray-100': '#F9FAFB',
  'accent-gray-200': '#EFF1F3',
  'accent-gray-300': '#E5E7EB',
  'accent-gray-400': '#D1D5DB',
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {...mapleColors},
    },
      backgroundImage: {
        'auth': "url('@/assets/images/Pattern.png')",
      },
      width: {
        '126': '31.5rem',
      }
  },
  plugins: [],
}

