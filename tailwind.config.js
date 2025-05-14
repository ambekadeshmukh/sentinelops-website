// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom SentinelOps colors from the Midnight Dew palette
        'sentinel': {
          'light-pink': '#BB7F97',
          'dark-pink': '#6C405F', 
          'navy': '#3A3357',
          'blue-teal': '#5F8493',
          'soft-blue': '#8DB3B8',
        },
        // Override default colors to use softer variants
        black: '#3A3357', // Using navy instead of pure black
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#3A3357', // Using custom navy
          800: '#1e293b',
          900: '#0f172a',
        },
        pink: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#BB7F97', // Using custom light pink
          600: '#6C405F', // Using custom dark pink
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#6C405F', // Using custom dark pink
          700: '#7c3aed',
          800: '#6b46c1',
          900: '#3A3357', // Using custom navy
        },
        blue: {
          50: '#eff6ff',
          100: '#dbeafe', 
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#5F8493', // Using custom blue-teal
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#8DB3B8', // Using custom soft blue
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#475569', // slate-600
            a: {
              color: '#6C405F', // dark pink
              '&:hover': {
                color: '#3A3357', // navy
              },
              textDecoration: 'none',
            },
            h1: {
              color: '#3A3357', // navy
              fontWeight: '700',
            },
            h2: {
              color: '#3A3357', // navy
              fontWeight: '700',
            },
            h3: {
              color: '#3A3357', // navy
              fontWeight: '600',
            },
            code: {
              color: '#6C405F', // dark pink
              backgroundColor: '#f8fafc',
              padding: '0.25rem 0.375rem',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            blockquote: {
              borderLeftColor: '#BB7F97', // light pink
              color: '#64748b',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};