import itImg from '../../assets/images/it-pic.png';
import type { Question } from '../../interfaces';
import styles from './styles.module.css';

interface Props {
  question: Question;
}

export const QuestionDetails = ({ question }: Props) => {
  return (
    <div className={styles.expandContainer}>
      <div className={styles.itemMeta}>
        <div className={styles.stat}>
          <span className={styles.label}>Рейтинг:</span>
          <span className={styles.value}>{question.rate}</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.label}>Сложность:</span>
          <span className={styles.value}>{question.complexity}</span>
        </div>
      </div>
      <img className={styles.itemImage} src={itImg} alt='скрин кода' />
      <p className={styles.itemDescription}>{question.description}</p>
    </div>
  );
};
