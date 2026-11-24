import type { Question } from '../../interfaces';
import type { QuizAnswer } from '../storage/quizAnswers';
import { shuffle } from './shuffle';

export type QuizMode = 'Повторение' | 'Только новые' | 'Случайные';

export const selectQuestionsForQuiz = (
  allQuestions: Question[],
  answers: Record<string, QuizAnswer>,
  mode: QuizMode,
  count: number,
): Question[] => {
  let filtered: Question[];

  switch (mode) {
    case 'Только новые':
      filtered = allQuestions.filter((q) => !answers[String(q.id)]);
      break;
    case 'Повторение':
      filtered = allQuestions.filter((q) => !!answers[String(q.id)]);
      break;
    case 'Случайные':
    default:
      filtered = allQuestions;
      break;
  }

  if (mode === 'Случайные') {
    return shuffle(filtered).slice(0, count);
  }

  return filtered.slice(0, count);
};
