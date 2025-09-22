// // src/theme/scale.ts
// import { Dimensions } from 'react-native';

// // 현재 기기의 가시 화면 크기(dp 단위)를 가져옴
// // width: 가로 길이, height: 세로 길이
// const { width, height } = Dimensions.get('window');

// // 디자인 시안 기준 기기 크기 (iPhone X/11/12/13/14 논리 해상도)
// const guidelineBaseWidth = 375;
// const guidelineBaseHeight = 812;

// /**
//  * 가로 비율에 따라 값(scale) 변환
//  * - 기준 width(375) 대비 현재 기기 width 비율을 곱해 계산
//  * - 주로 가로 길이, 가로 여백, 아이콘 크기 등에 사용
//  */
// export const scale = (size: number) =>
//   Math.round((width / guidelineBaseWidth) * size);

// /**
//  * 세로 비율에 따라 값(vertical scale) 변환
//  * - 기준 height(812) 대비 현재 기기 height 비율을 곱해 계산
//  * - 주로 세로 길이, 세로 여백 등에 사용
//  */
// export const verticalScale = (size: number) =>
//   Math.round((height / guidelineBaseHeight) * size);

// /**
//  * 과도한 확대/축소를 완화한 scale
//  * - factor=0 → 원래 size 유지
//  * - factor=1 → scale(size)와 동일
//  * - 기본값 factor=0.25 → 변화량의 25%만 반영 (추천)
//  *   → 큰 화면에서 과도하게 커지거나 작은 화면에서 과도하게 줄어드는 것 방지
//  * - 주로 텍스트, 아이콘 등 민감한 요소에 사용
//  */
// export const moderateScale = (size: number, factor = 0.25) =>
//   Math.round(size + (scale(size) - size) * factor);
