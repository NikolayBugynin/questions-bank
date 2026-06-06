import { useNavigate, useParams } from 'react-router-dom';
import { fetchQuestionById } from '../../api/question';
import { fetchQuestionsFromAPI } from '../../api/questions';
import backBtn from '../../assets/images/backBtn.svg';
import { useFetch } from '../../helpers/hooks/useFetch';
import type { Skill } from '../../interfaces';
import { AnswerContainer } from '../AnswerContainer/AnswerContainer';
import { FilterButton } from '../FilterButton/FilterButton';
import { FiltersList } from '../FiltersList/FiltersList';
import { MetaSection } from '../MetaSection/MetaSection';
import { NavButtons } from '../NavButtons/NavButtons';
import { QuestionHeader } from '../QuestionHeader/QuestionHeader';
import { QuestionMeta } from '../QuestionMeta/QuestionMeta';
import { SideBarWrapper } from '../SideBarWrapper/SideBar';
import styles from './styles.module.css';

export const QuestionDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const questionId = Number(id);

  const { data: question } = useFetch(fetchQuestionById, {
    id: questionId,
  });

  const { data } = useFetch(fetchQuestionsFromAPI);

  const questions = data?.data || [];

  const currentIndex = questions.findIndex((q) => q.id === questionId);

  const prevQuestion =
    currentIndex !== undefined && currentIndex > 0
      ? questions[currentIndex - 1]
      : null;

  const nextQuestion =
    currentIndex !== undefined && currentIndex < (questions.length || 0) - 1
      ? questions[currentIndex + 1]
      : null;

  const toggleSkill = (skill: Skill) => {
    // Переход на главную страницу с параметром skillId
    navigate(`/?skillId=${skill.id}`);
  };

  const toggleKeyWord = (word: string) => {
    navigate(`/?keyWord=${word}`);
  };

  // Обработчики навигации
  const goToPrevQuestion = () => {
    if (prevQuestion) {
      navigate(`/questions/${prevQuestion.id}`);
    }
  };

  const goToNextQuestion = () => {
    if (nextQuestion) {
      navigate(`/questions/${nextQuestion.id}`);
    }
  };

  const skills = question?.questionSkills;
  const keyWords = question?.keywords;
  console.log(question);

  //разделяем весь текст на передложения, чтобы сделать отступы согласно макету
  const sentences = question?.longAnswer.split(/(?<=[.!?])\s+/);

  return (
    <>
      <div className={styles.page}>
        <div className={styles.buttonContainer}>
          <img className={styles.backImg} src={backBtn} alt='' />
          <button className={styles.backButton} onClick={() => navigate('/')}>
            Назад
          </button>
        </div>
        {question && <QuestionHeader question={question} />}

        <NavButtons onPrev={goToPrevQuestion} onNext={goToNextQuestion} />
        <AnswerContainer title='Краткий ответ'>
          {question?.shortAnswer}
        </AnswerContainer>
        <AnswerContainer title='Развёрнутый ответ'>
          <div className={styles.sentencesContainer}>
            {sentences?.map((sentence, index) => (
              <p key={index} className={styles.textContent}>
                {sentence}
              </p>
            ))}
          </div>
        </AnswerContainer>
      </div>
      <div className={styles.sideBar}>
        <SideBarWrapper>
          <MetaSection title='Уровень'>
            {question && <QuestionMeta question={question} />}
          </MetaSection>
          <MetaSection title='Навыки'>
            {
              <FiltersList>
                {skills?.map((skill) => (
                  <FilterButton
                    onClick={() => toggleSkill(skill)}
                    key={skill.id}
                  >
                    {skill.title}
                  </FilterButton>
                ))}
              </FiltersList>
            }
          </MetaSection>
          <MetaSection title='Ключевые слова'>
            {
              <ul className={styles.keyWordsList}>
                {keyWords?.map((word, index) => (
                  <li onClick={() => toggleKeyWord(word)} key={index}>
                    #{word}
                  </li>
                ))}
              </ul>
            }
          </MetaSection>
          <div className={styles.authorSection}>
            <p className={styles.author}>
              Автор:
              <span className={styles.authorName}>
                {' '}
                {question?.updatedBy.username}
              </span>
            </p>
          </div>
        </SideBarWrapper>
      </div>
    </>
  );
};
