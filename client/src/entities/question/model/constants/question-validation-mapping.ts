import { z, ZodTypeAny } from 'zod';
import { QUESTION_TYPE } from './question-type';

type MainQuestionType = Exclude<ObjectValues<typeof QUESTION_TYPE>, 'options' | 'picture'>;

export const QUESTION_VALIDATION_MAPPING: Record<MainQuestionType, ZodTypeAny> = {
  text: z.string().min(1, { message: 'Text cannot be empty' }),
  email: z.string().email(),
  number: z.coerce.number().positive(),
  boolean: z.enum(['true', 'false'], {
    required_error: 'Please select Yes or No',
    message: 'Please select Yes or No',
  }),
} as const;
