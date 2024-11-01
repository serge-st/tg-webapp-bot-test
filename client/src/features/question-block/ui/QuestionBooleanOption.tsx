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
      className="flex"
      type="single"
      variant="outline"
      onValueChange={field.onChange}
      defaultValue={field.value}
    >
      <FormItem>
        <FormControl>
          <ToggleGroupItem value="false">No</ToggleGroupItem>
        </FormControl>
      </FormItem>
      <FormItem>
        <FormControl>
          <ToggleGroupItem value="true">Yes</ToggleGroupItem>
        </FormControl>
      </FormItem>
    </ToggleGroup>
  );
};
