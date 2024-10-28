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
    <header className="flex h-16 flex-grow-0 items-center justify-between border-2 border-red-400 p-2">
      <LanguageSelector className="w-[62px]" />
      <ProgressBar progress={progress} currentBlock={1} totalBlocks={4} />
      <RestartDialog />
    </header>
  );
}
