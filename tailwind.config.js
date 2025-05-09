// tailwind.config.js
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          black: '#000000',
          white: '#FFFFFF',
          gray: {
            50: '#FAFAFA',
            100: '#F4F4F5',
            200: '#E4E4E7',
            300: '#D4D4D8',
            400: '#A1A1AA',
            500: '#71717A',
            600: '#52525B',
            700: '#3F3F46',
            800: '#27272A',
            900: '#18181B',
          },
        },
        typography: {
          DEFAULT: {
            css: {
              color: '#374151',
              a: {
                color: '#000000',
                '&:hover': {
                  color: '#3F3F46',
                },
                textDecoration: 'none',
              },
              h1: {
                color: '#000000',
                fontWeight: '700',
              },
              h2: {
                color: '#000000',
                fontWeight: '700',
              },
              h3: {
                color: '#000000',
                fontWeight: '600',
              },
              code: {
                color: '#000000',
                backgroundColor: '#f4f4f5',
                padding: '0.25rem 0.375rem',
                borderRadius: '0.25rem',
                fontWeight: '400',
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
  