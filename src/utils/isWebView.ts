// utils/isWebView.ts
export default function isWebView() {
  const ua = navigator.userAgent || navigator.vendor;
  // 대표적인 웹뷰 user-agent 패턴 (필요시 추가)
  return /wv|WebView|iPhone.*Safari\/|Android.*Version\/[\d.]+/i.test(ua);
}
