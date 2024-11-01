import { Question } from '../types';

export const questions: Question[] = [
  // {
  //   name: 'Please enter your email',
  //   type: 'email',
  //   responseKey: 'email',
  //   placeholder: 'E.g.: me@domain.com',
  // },
  // {
  //   name: 'Please enter your height in cm',
  //   type: 'number',
  //   responseKey: 'height',
  //   placeholder: 'E.g.: 180',
  // },
  // {
  //   name: 'How are you, please describe',
  //   type: 'text',
  //   responseKey: 'how',
  // },
  // {
  //   name: 'Do you have any health chronic diseases?',
  //   type: 'boolean',
  //   responseKey: 'chronicDiseases',
  // },
  {
    name: 'What Is Your Goal',
    type: 'options',
    responseKey: 'goal',
    options: ['Fat Burning', 'Endurance or other sports goals', 'Bodybuilding/Fitness', 'Testosterone Increases (TRT)'],
  },
];
