import { FC } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { FormItem, FormControl, FormLabel } from '@/shared/ui/shadcn/form';
import { QUESTION_TYPE } from '@/entities/question/model/constants';
import { QuestionBooleanOption } from './QuestionBooleanOption';
import { RadioGroup, RadioGroupItem } from '@/shared/ui/shadcn/radio-group';

type QuestionToggleOptionsType = Extract<ObjectValues<typeof QUESTION_TYPE>, 'options' | 'boolean'>;

interface QuestionToggleOptionsProps {
  field: ControllerRenderProps<{ [x: string]: any }>;
  inputType: QuestionToggleOptionsType;
  options?: string[];
}

export const QuestionToggleOptions: FC<QuestionToggleOptionsProps> = ({ field, inputType, options }) => {
  const isBooleanType = inputType === 'boolean';

  if (inputType === 'options' && !options?.length) {
    throw new Error('Options array is required for options input type');
  }

  if (isBooleanType) {
    return <QuestionBooleanOption field={field} />;
  } else {
    return (
      <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
        {options!.map((option) => (
          <FormItem key={option} className="flex items-center space-x-3 space-y-0">
            <FormControl>
              <RadioGroupItem value={option} className="peer" />
            </FormControl>
            <FormLabel className="font-normal peer-aria-checked:underline">{option}</FormLabel>
          </FormItem>
        ))}
      </RadioGroup>
    );
  }
};
