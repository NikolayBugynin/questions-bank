import { QuizQuestionsSection } from '../../components/QuizQuestionsSection/QuizQuestionsSection';
import { QuizSummarySection } from '../../components/QuizSummarySection/QuizSummarySection';
import { getAnswers } from '../../helpers/storage/quizAnswers';
import { useAppSelector } from '../../redux/hooks/hooks';
import { selectQuestions } from '../../redux/quizSlice';
import styles from './styles.module.css';

export const QuizSummaryPage = () => {
  const questions = useAppSelector(selectQuestions);
  const answers = getAnswers(); // ← до useMemo, чтобы был в зависимостях
  const total = questions.length;

  return (
    <div className={styles.content}>
      <QuizSummarySection
        questions={questions}
        answers={answers}
        total={total}
      />
      <QuizQuestionsSection questions={questions} answers={answers} />
    </div>
  );
};
