import { FC } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { FormItem, FormControl } from '@/shared/ui/shadcn/form';
import { ToggleGroup, ToggleGroupItem } from '@/shared/ui/shadcn/toggle-group';
import { QUESTION_TYPE } from '@/entities/question/model/constants';
import { cn } from '@/shared/lib/utils';

type QuestionToggleOptionsType = Extract<ObjectValues<typeof QUESTION_TYPE>, 'options' | 'boolean'>;

interface QuestionToggleOptionsProps {
  field: ControllerRenderProps<{ [x: string]: any }>;
  inputType: QuestionToggleOptionsType;
  options?: string[];
}

export const QuestionToggleOptions: FC<QuestionToggleOptionsProps> = ({ field, inputType, options }) => {
  const isBooleanType = inputType === 'boolean';
  const toggleOptions = isBooleanType ? ['No', 'Yes'] : (options ?? []);

  if (inputType === 'options' && !options?.length) {
    throw new Error('Options array is required for options input type');
  }

  const getOptionValue = (option: string): string => {
    if (isBooleanType) {
      return option === 'Yes' ? 'true' : 'false';
    }
    return option;
  };

  return (
    <ToggleGroup
      className={cn('flex', !isBooleanType && 'flex-col')}
      type="single"
      onValueChange={field.onChange}
      defaultValue={field.value}
    >
      {toggleOptions.map((option) => (
        <FormItem key={option} className={cn(!isBooleanType && 'w-full')}>
          <FormControl>
            <ToggleGroupItem className={cn(!isBooleanType && 'w-full')} value={getOptionValue(option)}>
              {option}
            </ToggleGroupItem>
          </FormControl>
        </FormItem>
      ))}
    </ToggleGroup>
  );
};
