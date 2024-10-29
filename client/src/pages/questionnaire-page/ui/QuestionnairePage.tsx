import { FC } from 'react';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { QuestionBlock } from '@/features/question-block/ui';
import { questions } from '@/entities/question/model/data/questions';

export const QuestionnairePage: FC = () => {
  return (
    <div className="flex flex-1 flex-col justify-between">
      <Header />
      <QuestionBlock question={questions[0]} />
      <Footer />
    </div>
  );
};
