import { FC, Suspense } from "react";
import { QuestionnairePage } from "./QuestionnairePage";

export const App: FC = () => {
  return (
    <div className="app w-full min-h-screen p-2 flex">
      <Suspense fallback="">
        <QuestionnairePage />
      </Suspense>
    </div>
  );
};
