import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a1a1a',
          50: '#f5f5f5',
          100: '#e5e5e5',
          200: '#cccccc',
          300: '#a0a0a0',
          400: '#8b8b8b',
          500: '#4a4a4a',
          600: '#2d2d2d',
          700: '#1a1a1a',
          800: '#0d0d0d',
          900: '#000000',
        },
        accent: {
          DEFAULT: '#d4a5a5',
          light: '#e8b4b8',
          dark: '#c98b8f',
          50: '#faf5f5',
          100: '#f5e8e8',
          200: '#ebd3d3',
          300: '#e0bebe',
          400: '#d4a5a5',
          500: '#c98b8f',
        },
        gold: {
          DEFAULT: '#c9a227',
          light: '#e8d5b0',
          dark: '#a88620',
          50: '#faf8f2',
          100: '#f5efe0',
          200: '#ebdfc5',
          300: '#e0cfaa',
          400: '#d5bf8f',
          500: '#c9a227',
          600: '#a88620',
          700: '#876919',
          800: '#664d12',
          900: '#45300c',
        },
        // Somali Flag Colors
        somali: {
          blue: '#5D9CEC',
          white: '#FFFFFF',
          red: '#E04343',
          green: '#48CFAD',
        },
        cream: '#faf8f5',
        sand: '#f5f0e8',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Poppins', 'Montserrat', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
        heading: ['Cormorant Garamond', 'serif'],
        body: ['Poppins', 'sans-serif'],
        accent: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        hero: ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-mobile': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        h1: ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h1-mobile': ['2.5rem', { lineHeight: '1.2' }],
        h2: ['2.5rem', { lineHeight: '1.3' }],
        'h2-mobile': ['2rem', { lineHeight: '1.3' }],
        h3: ['1.75rem', { lineHeight: '1.4' }],
        'h3-mobile': ['1.5rem', { lineHeight: '1.4' }],
        h4: ['1.25rem', { lineHeight: '1.5' }],
        'h4-mobile': ['1.125rem', { lineHeight: '1.5' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-gold': 'linear-gradient(135deg, #c9a227 0%, #e8d5b0 50%, #c9a227 100%)',
        'gradient-rose': 'linear-gradient(135deg, #d4a5a5 0%, #e8b4b8 50%, #d4a5a5 100%)',
        'gradient-hero': 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.8) 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
      boxShadow: {
        'luxury': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'elegant': '0 10px 40px -10px rgba(0, 0, 0, 0.15)',
        'card': '0 2px 12px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 8px 30px rgba(0, 0, 0, 0.08)',
        'glow-gold': '0 0 40px rgba(201, 162, 39, 0.3)',
        'glow-rose': '0 0 40px rgba(212, 165, 165, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'bounce-slow': 'bounceSlow 2s infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201, 162, 39, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(201, 162, 39, 0.5)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '130': '32.5rem',
      },
      transitionDuration: {
        '400': '400ms',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
export default config