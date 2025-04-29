import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        mobile: '500px', // 원하는 모바일 너비를 여기서 설정
      },
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
      colors: {
        // Primary Color
        p1: '#FF6B6B',
        p2: '#FFB3BA',
        p3: '#FFE8EC',

        // Grey Scale
        g1: '#0D0D0D',
        g2: '#262626',
        g3: '#4D4D4D',
        g4: '#737373',
        g5: '#999999',
        g6: '#B3B3B3',
        g7: '#E5E5E5',
        g8: '#F2F2F2',
        g9: '#FFFFFF',

        // Status Color
        a: '#FF2A2A',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      lineHeight: {
        '140': '140%',
      },
      fontSize: {
        b1: '19px',
        b2: '17px',
        b3: '15px',
        m1: '19px',
        m2: '17px',
        m3: '15px',
        m4: '13px',
        r1: '19px',
        r2: '17px',
        r3: '15px',
        r4: '13px',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
