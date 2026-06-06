import type { Question } from '../../interfaces';
import styles from './styles.module.css';

interface Props {
  question: Question;
}

export const QuestionMeta = ({ question }: Props) => {
  return (
    <div className={styles.meta}>
      <div className={styles.stat}>
        <span className={styles.label}>Рейтинг:</span>
        <span className={styles.value}>{question.rate}</span>
      </div>
      <div className={styles.stat}>
        <span className={styles.label}>Сложность:</span>
        <span className={styles.value}>{question.complexity}</span>
      </div>
    </div>
  );
};
