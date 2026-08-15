/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        cp: {
          base: 'var(--cp-base)',
          surface: 'var(--cp-surface)',
          text: 'var(--cp-text)',
          muted: 'var(--cp-muted)',
          accent: 'var(--cp-accent)'
        }
      }
    }
  },
  plugins: []
};
