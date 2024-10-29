import { Question } from '../types';

export const questions: Question[] = [
  {
    name: 'Please enter your email',
    type: 'email',
    responseKey: 'email',
    placeholder: 'me@domain.com',
  },
  {
    name: 'Please enter your height in cm',
    type: 'number',
    responseKey: 'height',
    placeholder: '180',
  },
  {
    name: 'Do you have any health chronic diseases?',
    type: 'boolean',
    responseKey: 'chronicDiseases',
  },
  {
    name: 'What Is Your Goal',
    type: 'options',
    responseKey: 'goal',
  },
];
