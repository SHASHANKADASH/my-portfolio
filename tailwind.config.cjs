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
          mantle: 'var(--cp-mantle)',
          crust: 'var(--cp-crust)',
          surface: 'var(--cp-surface)',
          overlay: 'var(--cp-overlay)',
          text: 'var(--cp-text)',
          subtext: 'var(--cp-subtext)',
          muted: 'var(--cp-muted)',
          accent: 'var(--cp-accent)',
          blue: 'var(--cp-blue)',
          peach: 'var(--cp-peach)',
          mauve: 'var(--cp-mauve)',
          maroon: 'var(--cp-maroon)',
          yellow: 'var(--cp-yellow)',
          green: 'var(--cp-green)'
        }
      }
    }
  },
  plugins: []
};
