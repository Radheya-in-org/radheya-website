import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A0A0A',
        accent: '#C9A84C',
        secondary: '#1A1A2E',
        'warm-ivory': '#F5F0E8',
        subtle: '#2A2A3E',
        muted: '#888888',
        'dark-card': '#111118',
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
        ui: ['var(--font-outfit)', 'sans-serif'],
      },
      letterSpacing: {
        'ui-wide': '2px',
        'ui-wider': '3px',
        'ui-widest': '4px',
      },
      animation: {
        'slow-spin': 'spin 60s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        'draw-line': 'drawLine 1.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'arrow-slide': 'arrowSlide 0.3s ease-out forwards',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        drawLine: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        arrowSlide: {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(201, 168, 76, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(201, 168, 76, 0.6)' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(201,168,76,0.05) 50%, transparent 100%)',
        'gold-shimmer': 'linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.1) 50%, transparent 100%)',
      },
    },
  },
  plugins: [],
}

export default config
