// 팔레트: 실제 물리 색상 값
export const palette = {
  black: '#000000',
  white: '#FFFFFF',
  gray100: '#F5F5F5',
  gray500: '#9E9E9E',
  gray900: '#212121',
  primary: '#4F46E5',
  secondary: '#10B981',
  danger: '#EF4444',
  text: '#2E2E2E',
  backgroundColor: '#FFF8E7',
  button_text: '#DCD7C9',
  button_background: '#1C1C1C',
} as const;

// 의미 기반 색상: UI 맥락에 쓰는 이름
export const colors = {
  bg: palette.white,
  text: palette.gray900,
  textMuted: palette.gray500,
  border: '#E5E7EB',
  buttonBg: palette.button_background,
  buttonText: palette.button_text,
  danger: palette.danger,
  backgroundColor: palette.backgroundColor,
} as const;

export type ColorKey = keyof typeof colors;
