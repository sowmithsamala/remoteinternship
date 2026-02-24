module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4f46e5',
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe'
        },
        muted: '#6b7280'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 10px 25px rgba(16,24,40,0.08)'
      },
      borderRadius: {
        xl: '0.75rem'
      }
    }
  },
  plugins: [],
}
