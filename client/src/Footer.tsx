import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

const tg = window.Telegram.WebApp;

export const Footer = () => {
  const { t } = useTranslation('footer');

  const hangleTgLinkOpen = () => {
    tg.openTelegramLink('https://t.me/black_triangle_tg');
  };

  const hangleTgLinkOpen2 = () => {
    tg.openLink('https://google.com');
  };

  const hangleTgLinkOpen3 = () => {
    tg.openTelegramLink('https://t.me/Thorstein_W?start=direct');
  };

  const handleArticleOpen = () => {
    tg.openLink('https://telegra.ph/whbfkwjbwu8owefn78y8-05-03');
  };
  return (
    <Suspense fallback={'Lasdf'}>
      <footer className="flex flex-col items-center justify-center gap-4">
        <button onClick={hangleTgLinkOpen2} className="underline">
          {t('AnotherWebsite')}
        </button>
        <button onClick={hangleTgLinkOpen} className="underline">
          {t('OpenOurChannel')}
        </button>
        <button onClick={hangleTgLinkOpen3} className="underline">
          {t('OpenPersonalChat')}
        </button>
        <button onClick={handleArticleOpen} className="underline">
          {t('OpenArticle')}
        </button>
      </footer>
    </Suspense>
  );
};
