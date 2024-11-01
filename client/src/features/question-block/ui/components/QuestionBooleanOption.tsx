import { FC } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { ToggleGroup, ToggleGroupItem } from '@/shared/ui/shadcn/toggle-group';
import { FormItem, FormControl } from '@/shared/ui/shadcn/form';

interface QuestionBooleanOptionProps {
  field: ControllerRenderProps<{ [x: string]: any }>;
}

export const QuestionBooleanOption: FC<QuestionBooleanOptionProps> = ({ field }) => {
  return (
    <ToggleGroup
      className="flex gap-4"
      type="single"
      variant="outline"
      onValueChange={field.onChange}
      defaultValue={field.value}
    >
      <FormItem className="flex-grow">
        <FormControl>
          <ToggleGroupItem value="false" className="w-full">
            No
          </ToggleGroupItem>
        </FormControl>
      </FormItem>
      <FormItem className="flex-grow">
        <FormControl>
          <ToggleGroupItem value="true" className="w-full">
            Yes
          </ToggleGroupItem>
        </FormControl>
      </FormItem>
    </ToggleGroup>
  );
};
