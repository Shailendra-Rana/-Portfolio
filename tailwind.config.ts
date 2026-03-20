import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Semantic theme tokens — backed by CSS custom properties
        // These automatically switch between dark and light mode values
        'theme-bg':           'var(--color-bg)',
        'theme-surface':      'var(--color-surface)',
        'theme-accent':       'var(--color-accent)',
        'theme-accent-hover': 'var(--color-accent-hover)',
        'theme-text':         'var(--color-text)',
        'theme-muted':        'var(--color-text-muted)',
        'theme-border':       'var(--color-border)',
        'theme-badge-bg':     'var(--color-badge-bg)',
        'theme-badge-text':   'var(--color-badge-text)',

        // RPG Color Palette
        'rpg': {
          'dark': '#1a0033',
          'dark-2': '#330066',
          'dark-3': '#4d0099',
          'cyan': '#00d9ff',
          'purple': '#9d4edd',
          'purple-light': '#b366d9',
          'pink': '#ff006e',
          'gold': '#f7b801',
          'gold-dark': '#d4941e',
          'gray-dark': '#2d3748',
          'gray-light': '#e2e8f0',
          'gray-muted': '#a0aec0',
        },
      },
      backgroundColor: {
        glass: 'rgba(13, 0, 26, 0.5)',
        'glass-light': 'rgba(26, 0, 51, 0.7)',
      },
      boxShadow: {
        glow: '0 0 20px rgba(0, 217, 255, 0.5)',
        'glow-purple': '0 0 20px rgba(157, 78, 221, 0.5)',
        'glow-pink': '0 0 20px rgba(255, 0, 110, 0.5)',
        neon: '0 0 30px rgba(0, 217, 255, 0.8)',
        'neon-purple': '0 0 30px rgba(157, 78, 221, 0.8)',
      },
      borderColor: {
        glow: 'rgba(0, 217, 255, 0.5)',
        'glow-purple': 'rgba(157, 78, 221, 0.5)',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(0, 217, 255, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 217, 255, 0.8)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 0%' },
        },
        slide: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-left': {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 2s linear infinite',
        slide: 'slide 0.6s ease-out',
        'slide-left': 'slide-left 0.6s ease-out',
        'slide-right': 'slide-right 0.6s ease-out',
        'fade-in': 'fade-in 0.4s ease-out',
        'scale-in': 'scale-in 0.4s ease-out',
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        gradient: 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.glass': {
          '@apply bg-glass backdrop-blur-sm border border-glow rounded-lg': {},
        },
        '.glass-dark': {
          '@apply bg-glass-light backdrop-blur-md border border-glow-purple rounded-lg': {},
        },
        '.glow-border': {
          '@apply border border-glow rounded-lg': {},
        },
        '.glow-purple-border': {
          '@apply border border-glow-purple rounded-lg': {},
        },
        '.neon-glow': {
          '@apply shadow-neon': {},
        },
        '.neon-glow-purple': {
          '@apply shadow-neon-purple': {},
        },
        '.text-glow': {
          textShadow: '0 0 10px rgba(0, 217, 255, 0.5)',
        },
        '.text-glow-purple': {
          textShadow: '0 0 10px rgba(157, 78, 221, 0.5)',
        },
      });
    },
  ],
};
