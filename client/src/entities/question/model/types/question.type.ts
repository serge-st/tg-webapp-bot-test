import { QUESTION_TYPE } from '../constants';

export type Question = {
  name: string;
  responseKey: string;
  type: ObjectValues<typeof QUESTION_TYPE>;
  placeholder?: string;
  options?: string[];

  // response?
  // preMessages?
  // skipIf?
};
