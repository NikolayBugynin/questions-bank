import { Link } from 'react-router-dom';
import itImg from '../../assets/images/it-pic.png';
import arrBtn from '../../assets/images/backBtn.svg'
import type { Question } from '../../interfaces';
import { QuestionMeta } from '../QuestionMeta/QuestionMeta';
import styles from './styles.module.css';

interface Props {
  question: Question;
}

export const QuestionDetails = ({ question }: Props) => {
  return (
    <div className={styles.expandContainer}>
      <QuestionMeta question={question} />
      <img className={styles.itemImage} src={itImg} alt='скрин кода' />
      <p className={styles.itemDescription}>{question.description}</p>
      <div className={styles.link}>
        <Link to={`/questions/${question.id}`} className={styles.linkBtn}>
          Подробнее
        </Link>
        <img className={styles.arrBtn} src={arrBtn} alt='' />
      </div>
    </div>
  );
};
