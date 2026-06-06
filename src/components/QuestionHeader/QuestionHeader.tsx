import pic from '../../assets/images/question-pic.png';
import type { Question } from '../../interfaces';
import styles from './styles.module.css';

interface Props {
  question: Question;
}

export const QuestionHeader = ({ question }: Props) => {
  return (
    <div className={styles.questionHeader}>
      <img className={styles.image} src={pic} alt='IT-картинка' />
      <div className={styles.textContent}>
        <h2 className={styles.title}>{question?.title}</h2>
        <p className={styles.description}>{question?.description}</p>
      </div>
    </div>
  );
};
