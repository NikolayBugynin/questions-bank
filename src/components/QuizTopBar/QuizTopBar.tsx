import type { Question } from '../../interfaces';
import styles from './styles.module.css';

interface Props {
  questions: Question[];
  currentIndex: number;
  percent: number;
}

export const QuizTopBar = ({ questions, currentIndex, percent }: Props) => {
  return (
    <div className={styles.сontent}>
      <div className={styles.heaaderTop}>
        <h2 className={styles.headerTitle}>Вопросы собеседования</h2>
        <span className={styles.counter}>
          <span className={styles.counterWide}>
            {currentIndex + 1}/{questions.length}
          </span>
          <span className={styles.counterNarrow}>
            {currentIndex} из {questions.length}
          </span>
        </span>
      </div>
      <div
        className={styles.progress}
        role='progressbar'
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className={styles.progressBar} style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
};
