export type QuizAnswer = { know: boolean; answeredAt: string };

const STORAGE_KEY = 'quizAnswers';

export const getAnswers = (): Record<string, QuizAnswer> => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}');
  } catch {
    return {};
  }
};

export const saveAnswer = (questionId: number, know: boolean): void => {
  const all = getAnswers();
  all[String(questionId)] = { know, answeredAt: new Date().toISOString() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
};

export const getAnswer = (questionId: number): QuizAnswer | undefined =>
  getAnswers()[String(questionId)];
