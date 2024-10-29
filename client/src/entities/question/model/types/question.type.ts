import { QUESTION_TYPE } from '../constants';

export type Question = {
  type: ObjectValues<typeof QUESTION_TYPE>;
  name: string;
  responseKey: string;
  placeholder?: string;
};
