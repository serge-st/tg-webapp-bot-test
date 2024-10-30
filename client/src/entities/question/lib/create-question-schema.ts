import { z, ZodTypeAny } from 'zod';
import { Question } from '../model/types';
import { QUESTION_VALIDATION_MAPPING } from '../model/constants';

export const createQuestionSchema = (question: Question) => {
  const { responseKey, type, options } = question;

  let schema: ZodTypeAny;

  switch (type) {
    case 'options': {
      if (!options) {
        throw new Error('Options array is missing');
      }
      schema = z.enum([options[0], ...options.slice(0)]);
      break;
    }

    case 'picture': {
      // TODO implement this
      schema = z.any();
      break;
    }

    default: {
      schema = QUESTION_VALIDATION_MAPPING[type];
      break;
    }
  }

  return z.object({
    [responseKey]: schema,
  });
};
