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
  'accent-green-200': '#EDF7F1',
  'accent-green-700': '#25A254',
  'accent-blue': '#476EF9',
  'accent-gray-100': '#F9FAFB',
  'accent-gray-200': '#EFF1F3',
  'accent-gray-300': '#E5E7EB',
  'accent-gray-400': '#D1D5DB',
  'accent-gray-500': '#6B7280',
  'accent-gray-600': '#BFBFBF',
  'accent-gray-700': '#9CA3AF',
  'accent-gray-800': '#374151',
}

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { ...mapleColors },
      backgroundImage: {
        auth: "url('@/assets/images/Pattern.png')",
      },
      width: {
        13: '3.375rem',
        50: '12.5rem',
        108: '26.813rem',
        126: '31.5rem',
      },
      height: {
        13: '3.375rem',
      },
      fontSize: {
        '2.5xl': '2rem',
        '4.5xl': '2.5rem',
      }
    },
  },
  plugins: [],
}

