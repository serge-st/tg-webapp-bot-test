import { FC } from 'react';
import { Input } from '@/shared/ui/shadcn/input';
import { ControllerRenderProps } from 'react-hook-form';
import { QUESTION_TYPE } from '@/entities/question/model/constants';

type QuestionInputType = Exclude<ObjectValues<typeof QUESTION_TYPE>, 'options' | 'boolean'>;

// TODO create a separate Textarea component for longer inputs
// TODO handle picture inputs
interface QuestionInputProps {
  inputType: QuestionInputType;
  placeholder?: string;
  field: ControllerRenderProps<{ [x: string]: any }>;
}

export const QuestionInput: FC<QuestionInputProps> = ({ inputType, placeholder, field }) => {
  return (
    <>
      <Input type={inputType} placeholder={placeholder} {...field} />
    </>
  );
};
