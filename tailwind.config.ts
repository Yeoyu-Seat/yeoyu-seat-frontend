import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
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
    },
  },
  plugins: [],
};

export default config;
