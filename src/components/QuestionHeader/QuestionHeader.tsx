import bulletImg from '../../assets/images/bullet.svg';
import type { Question } from '../../interfaces';
import { ExpandButton } from '../ExpandButton/ExpandButton';
import styles from './styles.module.css';

interface Props {
  question: Question;
  toggleQuestion: (questionId: number) => void;
  isOpen: boolean;
}

export const QuestionHeader = ({ question, toggleQuestion, isOpen }: Props) => {
  return (
    <div className={styles.item}>
      <div className={styles.itemHeader}>
        <img
          className={styles.bullet}
          src={bulletImg}
          alt='Точка радям с заголовком'
        />
        <h3 className={styles.itemTitle}>{question.title}</h3>
      </div>
      <ExpandButton
        onClick={() => toggleQuestion(question.id)}
        isOpen={isOpen}
      />
    </div>
  );
};
