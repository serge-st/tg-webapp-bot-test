import { SESSION_STORAGE_KEY } from '../constants';

type Answer = { [x: string]: any };

export const questionStorage = {
  save(answer: Answer) {
    const data = this.get();
    if (!data.length) return sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify([answer]));
  },

  get(): Answer[] {
    const data = sessionStorage.getItem(SESSION_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },
};
