/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1A73E8',
        secondary: '#F9AB00',
        accent: '#E91E63',
        background: '#F5ECD9',
        text: '#3E2F1C',
        // ...스타일 가이드의 색상 추가
      },
      fontFamily: {
        sans: ['"Noto Sans KR"', 'Arial', 'sans-serif'],
        // ...스타일 가이드의 폰트 추가
      },
      spacing: {
        128: '32rem',
        d: '0.5rem',
        dg: '0.25rem',
        // ...간격 등 추가
      },
      // 기타 스타일 가이드에 맞는 속성 추가
    },
  },
  darkMode: 'class', // 다크모드 사용 시
  plugins: [],
};
