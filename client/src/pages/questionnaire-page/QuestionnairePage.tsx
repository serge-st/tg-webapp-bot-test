import { FC } from 'react';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { QuestionBlock } from '@/features/question-block/ui';

export const QuestionnairePage: FC = () => {
  return (
    <div className="flex flex-1 flex-col justify-between">
      <Header />
      <QuestionBlock />
      <Footer />
    </div>
  );
};
