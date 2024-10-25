import { FC } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const QuestionnairePage: FC = () => {
  return (
    <div className="flex-1 flex flex-col justify-between">
      <Header />
      <main className="flex-auto flex justify-center items-center">
        main content
      </main>
      <Footer />
    </div>
  );
};
