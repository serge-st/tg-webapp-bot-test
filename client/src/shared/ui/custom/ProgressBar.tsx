import { FC } from 'react';
import { Badge } from '@/shared/ui/shadcn/badge';
import { Progress } from '@/shared/ui/shadcn/progress';

interface ProgressBarProps {
  progress: number;
  currentBlock: number;
  totalBlocks: number;
}

export const ProgressBar: FC<ProgressBarProps> = ({ progress = 0, currentBlock, totalBlocks }) => {
  return (
    <div className="flex w-full items-center gap-1 text-xs">
      <Progress value={progress} max={100} />
      <Badge className="text-xs hover:bg-primary/100">
        {currentBlock}/{totalBlocks}
      </Badge>
    </div>
  );
};
