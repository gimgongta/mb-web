// src/theme/typography.ts
export const typeScale = {
  xs: 12,
  sm: 14,
  md: 16, // 기본 본문
  lg: 20, // 섹션 타이틀
  xl: 24, // 화면 타이틀
  xxl: 28,
} as const;

export const font = {
  body: typeScale.md,
  bodySm: typeScale.sm,
  title: typeScale.lg,
  h1: typeScale.xl,
  h2: typeScale.lg,
} as const;

/** 가독성 라인높이: 1.4배(정수 반올림) */
export const lh = (size: number) => Math.round(size * 1.4);
