import { FC, Suspense } from 'react';
import { QuestionnairePage } from '@/pages/questionnaire-page/ui';

export const App: FC = () => {
  return (
    <div className="app flex min-h-screen w-full p-2">
      <Suspense fallback="">
        <QuestionnairePage />
      </Suspense>
    </div>
  );
};
