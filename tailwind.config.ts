import type { Config } from 'tailwindcss'
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FFFF7D', 'paper-dim': '#E2DE6B', ink: '#7A0A0A', line: '#C8102E',
        wa: { DEFAULT: '#25D366', hover: '#1EBE5A', ink: '#0B3B1E', border: '#128C4A' },
      },
      fontFamily: { pixel: ['"DotGothic16"', 'monospace'], mono: ['"Space Mono"', 'monospace'] },
      keyframes: { marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } } },
      animation: { marquee: 'marquee 45s linear infinite' },
      borderRadius: { none: '0' },
      zIndex: { 35: '35' },
    },
  },
  plugins: [],
} satisfies Config
