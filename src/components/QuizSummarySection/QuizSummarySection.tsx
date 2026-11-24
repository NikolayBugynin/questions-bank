import { Link } from 'react-router-dom';
import arrowRight from '../../assets/images/arrowRight.png';
import type { QuizAnswer } from '../../helpers/storage/quizAnswers';
import type { Question } from '../../interfaces';
import { ProgressColumn } from '../ProgressColumn/ProgressColumn';
import { StatsColumn } from '../StatsColumn/StatsColumn';
import styles from './styles.module.css';

interface Props {
  questions: Question[];
  answers: Record<string, QuizAnswer>;
  total: number;
}

export const QuizSummarySection = ({ questions, answers, total }: Props) => {
  return (
    <section className={styles.content}>
      <h3 className={styles.title}>Умный режим изучения вопросов</h3>
      <div className={styles.linkBtn}>
        <Link to='#'>Посмотреть статистику</Link>
        <img src={arrowRight} alt='стрелка вправо' />
      </div>
      <StatsColumn questions={questions} answers={answers} total={total} />
      <ProgressColumn questions={questions} answers={answers} />
    </section>
  );
};
