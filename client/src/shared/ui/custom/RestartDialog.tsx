import { FC } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/shadcn/dialog';
import { RotateCcw } from 'lucide-react';
import { Button } from '@/shared/ui/shadcn/button';

export const RestartDialog: FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-[62px]">
          <RotateCcw />
        </Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Do you want to restart?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This action will delete your current progress.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex-row items-center justify-center gap-8">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit">Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
