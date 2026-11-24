import questionImage from '../../assets/images/questionImage.png';
import type { QuizAnswer } from '../../helpers/storage/quizAnswers';
import type { Question } from '../../interfaces';
import { ThumbDownButton } from '../ui/buttons/AnswerButtons/ThumbDownButton';
import { ThumbUpButton } from '../ui/buttons/AnswerButtons/ThumbUpButton';
import styles from './styles.module.css';

interface Props {
  questions: Question[];
  answers: Record<string, QuizAnswer>;
}

export const QuizQuestionsSection = ({ questions, answers }: Props) => {
  return (
    <section className={styles.questionList}>
      <h3 className={styles.questionListTitle}>
        Список пройденных вопросов собеседования
      </h3>
      <ul className={styles.questionListItems}>
        {questions.map((question) => {
          const answer = answers[String(question.id)];

          return (
            <li key={question.id} className={styles.questionCard}>
              <img
                className={styles.questionImage}
                src={questionImage}
                alt='скрин кода'
              />
              <div className={styles.questionCardBox}>
                <span className={styles.questionTitle}>{question.title}</span>
                <span>
                  {answer?.know ? (
                    <ThumbUpButton
                      className={`${styles.thumbWithBg} ${styles.active}`}
                      text='Знаю'
                    ></ThumbUpButton>
                  ) : (
                    <ThumbDownButton
                      className={styles.thumbWithBg}
                      text='Не знаю'
                    ></ThumbDownButton>
                  )}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
