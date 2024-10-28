import { FC } from 'react';
import { Progress } from './components/ui/progress';
import { Badge } from './components/ui/badge';

interface ProgressBarProps {
  progress: number;
  currentBlock: number;
  totalBlocks: number;
}

export const ProgressBar: FC<ProgressBarProps> = ({ progress = 0, currentBlock, totalBlocks }) => {
  return (
    <div className="flex max-w-md flex-auto flex-col items-center justify-center gap-1 px-2 text-sm">
      <h2 className="text-center">
        General Info
        <Badge className="ml-2">
          {currentBlock}/{totalBlocks}
        </Badge>
      </h2>

      <Progress value={progress} max={100} />
    </div>
  );
};
