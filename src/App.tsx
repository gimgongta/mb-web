// src/App.tsx
import { useTranslation } from 'react-i18next';
import TextComponent from './components/TextComponent';

export default function App() {
  const { t } = useTranslation('common');
  const url = import.meta.env.VITE_MAIN_URL;

  return (
    <div className="min-h-screen flex flex-col justify-center bg-background p-d gap-2">
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
