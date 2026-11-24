import { useNavigate, useParams } from 'react-router-dom';
import { QuestionContainer } from '../../components/QuestionContainer/QuestionContainer';
import { QuizTopBar } from '../../components/QuizTopBar/QuizTopBar';
import { NavButtons } from '../../components/ui/buttons/NavButtons/NavButtons';
import { QuizFinishButton } from '../../components/ui/buttons/QuizFinishButton/QuizFinishButton';
import { useAppSelector } from '../../redux/hooks/hooks';
import { selectQuestions } from '../../redux/quizSlice';
import styles from './styles.module.css';

export const QuizQuestionsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const questionId = Number(id);

  const questions = useAppSelector(selectQuestions);

  if (!questions.length) {
    return <p>Вопросы не загружены!</p>;
  }

  const currentIndex = questions.findIndex((q) => q.id === questionId);

  const question = questions[currentIndex];

  const prevQuestion = currentIndex > 0 ? questions[currentIndex - 1] : null;

  console.log(questions.length);

  const nextQuestion =
    currentIndex < questions.length - 1 ? questions[currentIndex + 1] : null;

  console.log(questions[currentIndex]);

  const goToPrevQuestion = () => {
    if (prevQuestion) {
      navigate(`/trainer/${prevQuestion.id}`);
    }
  };

  const goToNextQuestion = () => {
    if (nextQuestion) {
      navigate(`/trainer/${nextQuestion.id}`);
    }
  };

  const total = questions.length;
  const position = currentIndex + 1;
  const percent = total ? Math.round((position / total) * 100) : 0;

  const handleFinish = () => {
    if (!questions.length) return;

    navigate(`/trainer/stats`);
  };

  return (
    <div className={styles.content}>
      <QuizTopBar
        questions={questions}
        currentIndex={currentIndex}
        percent={percent}
      />
      <div className={styles.questionContent}>
        <NavButtons
          onPrev={goToPrevQuestion}
          onNext={goToNextQuestion}
          disablePrev={!prevQuestion}
          disableNext={!nextQuestion}
          className={styles.navSpread}
          prevLabel='Назад'
          nextLabel='Далее'
        />
        <QuestionContainer question={question} nextQuestion={nextQuestion} />
        <div className={styles.bottomContainer}>
          <QuizFinishButton
            onClick={handleFinish}
            disabled={!questions.length}
          />
        </div>
      </div>
    </div>
  );
};
