import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import vrLAdy from '../../assets/images/vrLady.png';
import { useMediaQuery } from '../../helpers/hooks/useMediaQuery';
import { saveAnswer } from '../../helpers/storage/quizAnswers';
import type { Question } from '../../interfaces';
import { ThumbDownButton } from '../ui/buttons/AnswerButtons/ThumbDownButton';
import { ThumbUpButton } from '../ui/buttons/AnswerButtons/ThumbUpButton';
import styles from './styles.module.css';

interface Props {
  question: Question;
  nextQuestion: Question | null;
}

export const QuestionContainer = ({ question, nextQuestion }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleKnow = () => {
    saveAnswer(question.id, true);
    if (nextQuestion) navigate(`/trainer/${nextQuestion.id}`);
  };

  const handleDontKnow = () => {
    saveAnswer(question.id, false);
    if (nextQuestion) navigate(`/trainer/${nextQuestion.id}`);
  };

  const isNarrow = useMediaQuery('(max-width: 375px)');

  return (
    <div className={styles.content}>
      {question && (
        <h4 className={styles.title}>
          <span className={styles.dot}></span>
          {question.title}
        </h4>
      )}
      <button
        className={styles.showAnswerBtn}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Скрыть ответ' : 'Посмотреть ответ'}
      </button>
      {isOpen && <p className={styles.answer}>{question.shortAnswer}</p>}
      <div className={styles.answerToggle}>
        <ThumbDownButton
          onClick={handleDontKnow}
          text='Не знаю'
          hideText={isNarrow}
        />
        <ThumbUpButton onClick={handleKnow} text='Знаю' hideText={isNarrow} />
      </div>
      <img
        className={styles.image}
        src={vrLAdy}
        alt='картинка с девушкой в очках VR'
      />
    </div>
  );
};
