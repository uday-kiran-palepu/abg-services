module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Medical trust with approachable warmth
        primary: {
          DEFAULT: "#2C7A7B", // teal-700
          50: "#E6FFFA", // teal-50
          100: "#B2F5EA", // teal-100
          200: "#81E6D9", // teal-200
          300: "#4FD1C7", // teal-300
          400: "#38B2AC", // teal-400
          500: "#319795", // teal-500
          600: "#2C7A7B", // teal-600
          700: "#285E61", // teal-700
          800: "#234E52", // teal-800
          900: "#1D4044", // teal-900
        },
        // Secondary Colors - Professional depth without sterility
        secondary: {
          DEFAULT: "#4A90A4", // blue-gray-500
          50: "#F8FAFC", // blue-gray-50
          100: "#F1F5F9", // blue-gray-100
          200: "#E2E8F0", // blue-gray-200
          300: "#CBD5E1", // blue-gray-300
          400: "#94A3B8", // blue-gray-400
          500: "#4A90A4", // blue-gray-500
          600: "#475569", // blue-gray-600
          700: "#334155", // blue-gray-700
          800: "#1E293B", // blue-gray-800
          900: "#0F172A", // blue-gray-900
        },
        // Accent Colors - Health, growth, positive outcomes
        accent: {
          DEFAULT: "#38A169", // green-600
          50: "#F0FFF4", // green-50
          100: "#C6F6D5", // green-100
          200: "#9AE6B4", // green-200
          300: "#68D391", // green-300
          400: "#48BB78", // green-400
          500: "#38A169", // green-500
          600: "#2F855A", // green-600
          700: "#276749", // green-700
          800: "#22543D", // green-800
          900: "#1C4532", // green-900
        },
        // Background Colors
        background: "#FFFFFF", // white
        surface: {
          DEFAULT: "#F7FAFC", // gray-50
          100: "#EDF2F7", // gray-100
          200: "#E2E8F0", // gray-200
        },
        // Text Colors
        text: {
          primary: "#2D3748", // gray-800
          secondary: "#4A5568", // gray-600
          muted: "#718096", // gray-500
          light: "#A0AEC0", // gray-400
        },
        // Status Colors
        success: {
          DEFAULT: "#48BB78", // green-400
          50: "#F0FFF4", // green-50
          100: "#C6F6D5", // green-100
          600: "#38A169", // green-600
          700: "#2F855A", // green-700
        },
        warning: {
          DEFAULT: "#ED8936", // orange-400
          50: "#FFFAF0", // orange-50
          100: "#FEEBC8", // orange-100
          600: "#DD6B20", // orange-600
          700: "#C05621", // orange-700
        },
        error: {
          DEFAULT: "#E53E3E", // red-500
          50: "#FED7D7", // red-100
          100: "#FEB2B2", // red-200
          600: "#E53E3E", // red-500
          700: "#C53030", // red-600
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'medical': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'modal': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      borderColor: {
        DEFAULT: 'rgba(74, 85, 104, 0.2)', // gray-600 with 20% opacity
        light: 'rgba(160, 174, 192, 0.3)', // gray-400 with 30% opacity
      },
      transitionDuration: {
        '300': '300ms',
        '150': '150ms',
      },
      transitionTimingFunction: {
        'out': 'ease-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      lineHeight: {
        'relaxed': '1.7',
        'tight': '1.3',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
}