/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── Sweet / SweetCharm palette ──────────────────────────
        cream:               '#FFFAF3',        // page background (warm white)
        'cream-light':       '#FFFFFF',
        'cream-warm':        '#FDE8D8',        // sections background (light peach)
        'cream-peach':       '#FAD5BF',        // hero background (warm apricot)

        // Primary: hot pink (CTA, accents, active states)
        'peanuts-green':       '#F06292',      // ← was dark green, now hot pink
        'peanuts-green-dark':  '#E91E8C',      // darker pink for hover
        'peanuts-green-light': '#F48FB1',      // lighter pink
        'peanuts-green-pale':  '#FCE4EC',      // blush-pale for backgrounds/tags

        // Secondary: warm peach / salmon
        'peanuts-yellow':      '#FFAB91',      // ← was golden yellow, now peach-salmon
        'peanuts-yellow-pale': '#FBE9E7',      // very pale peach

        // Tertiary: pastel pink (sky equivalent)
        'peanuts-sky':         '#F8BBD9',
        'peanuts-sky-pale':    '#FFF0F5',

        // Alert red → same as primary for a cohesive feel
        'peanuts-red':         '#F06292',
        'peanuts-red-pale':    '#FCE4EC',

        // Text
        charming:            '#3D2B1F',        // dark chocolate brown (headings)
        'warm-gray':         '#7B5E50',        // medium warm brown (body text)
        'warm-gray-light':   '#A08070',        // subtle text

        // Brand extras
        whatsapp:            '#25D366',
      },
      fontFamily: {
        pacifico:  ['Pacifico', 'cursive'],
        quicksand: ['Quicksand', 'sans-serif'],
        poppins:   ['Poppins', 'sans-serif'],
        inter:     ['Inter', 'sans-serif'],
        mono:      ['"DM Mono"', 'monospace'],
      },
      animation: {
        'ken-burns':   'kenBurns 14s ease-in-out infinite',
        'float-1':     'float 3.2s ease-in-out infinite',
        'float-2':     'float 3.2s ease-in-out 1.2s infinite',
        'float-3':     'float 4s ease-in-out 0.6s infinite',
        'marquee':     'marqueeScroll 30s linear infinite',
        'cloud-drift': 'cloudDrift 18s ease-in-out infinite',
        'wag':         'wag 2s ease-in-out infinite',
        'bounce-slow': 'bounceSlow 1.6s ease-in-out infinite',
        'pulse-soft':  'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        kenBurns: {
          '0%, 100%': { transform: 'scale(1.0)' },
          '50%':      { transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        marqueeScroll: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        cloudDrift: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%':      { transform: 'translateX(12px)' },
        },
        wag: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%':      { transform: 'rotate(10deg)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)', opacity: 1 },
          '50%':      { transform: 'scale(1.06)', opacity: 0.85 },
        },
      },
      boxShadow: {
        'pink-soft':   '0 4px 24px rgba(240,98,146,0.18)',
        'pink-glow':   '0 0 22px rgba(240,98,146,0.28)',
        'peach-soft':  '0 4px 20px rgba(255,171,145,0.30)',
        'card':        '0 2px 20px rgba(61,43,31,0.07)',
        'card-hover':  '0 8px 32px rgba(61,43,31,0.12)',
      },
    },
  },
  plugins: [],
}
