import { LanguageSelector } from '@/shared/ui/custom';
import { ProgressBar } from '@/shared/ui/custom';
import { RestartDialog } from '@/shared/ui/custom';
import { useEffect, useState } from 'react';

export function Header() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 3);
    }, 100);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <header className="flex flex-col border-b-2 border-[bg-primary] p-2">
      <h2 className="text-center text-base">Visual Assessment</h2>
      <div className="flex w-full items-center gap-2">
        <LanguageSelector className="w-[62px]" />
        <ProgressBar progress={progress} currentBlock={1} totalBlocks={4} />
        <RestartDialog />
      </div>
    </header>
  );
}
