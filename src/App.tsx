// src/App.tsx
import { useTranslation } from 'react-i18next';
import TextComponent from './components/TextComponent';
import isWebView from './utils/isWebView';

export default function App() {
  const { t } = useTranslation('common');
  const url = import.meta.env.VITE_MAIN_URL;
  const paddingClass = isWebView() ? 'p-d' : 'p-12'; // 예시: 앱은 p-4, 웹은 p-12
  const contentJustifyClass = isWebView() ? 'justify-center' : 'justify-start';

  return (
    <div
      className={`min-h-screen flex flex-col ${contentJustifyClass} bg-background gap-2 ${paddingClass}`}
    >
      <TextComponent text={t('text1')} />
      <TextComponent text={t('text2')} />
      <audio controls preload="metadata" src={url}>
        <source src={url} type="audio/wav" />
      </audio>
      <TextComponent text={t('text3')} />
      <TextComponent text={t('text4')} />
      <TextComponent text={t('text5')} />
    </div>
  );
}
