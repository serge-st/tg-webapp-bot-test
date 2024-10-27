import { FC } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const QuestionnairePage: FC = () => {
  return (
    <div className="flex flex-1 flex-col justify-between">
      <Header />
      <main className="flex flex-auto items-center justify-center">main content</main>
      <Footer />
    </div>
  );
};
