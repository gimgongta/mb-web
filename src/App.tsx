// src/App.tsx
import { useTranslation } from 'react-i18next';
import TextComponent from './components/TextComponent';

// function Home() {
//   return (
//     <div>
//       <h1>WebView App</h1>
//       <p>React Native WebView로 띄울 정적 사이트</p>
//       <nav>
//         <Link to="/">Home</Link> | <Link to="/about">About</Link>
//       </nav>
//     </div>
//   );
// }

// function About() {
//   return <div>About Page</div>;
// }

// export default function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//     </Routes>
//   );
// }

export default function App() {
  const { t } = useTranslation('common');
  // const { t, i18n } = useTranslation('common');

  return (
    <div className="min-h-screen bg-gray-50">
      <TextComponent text={t('text1')} />
      <TextComponent text={t('text2')} />
      <audio
        controls
        preload="metadata"
        src="https://raw.githubusercontent.com/gimgongta/mb-db/main/audio/bell.wav"
      >
        <source
          src="https://raw.githubusercontent.com/gimgongta/mb-db/main/audio/bell.wav"
          type="audio/wav"
        />
        Your browser does not support the audio element.
      </audio>
      <TextComponent text={t('text3')} />
      <TextComponent text={t('text4')} />
      <TextComponent text={t('text5')} />
      {/* <button onClick={() => i18n.changeLanguage('en')}>EN</button>
      <button onClick={() => i18n.changeLanguage('ko')}>KO</button> */}
    </div>
  );
}
