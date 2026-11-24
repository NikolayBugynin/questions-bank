import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FilterButton } from '../../components/FilterButton/FilterButton';
import { FiltersList } from '../../components/FiltersList/FiltersList';
import { FiltersSection } from '../../components/FiltersSection/FiltersSection';
import { CounterButton } from '../../components/ui/buttons/CounterButton/CounterButton';
import { QuizStartButton } from '../../components/ui/buttons/QuizStartButton/QuizStartButton';
import { COMPLEXITY_MAP, MODE_OPTIONS } from '../../constants/constants';
import {
  toggleComplexity,
  toggleSkill,
  toggleSpecialization,
} from '../../helpers/filters/toggleFilters';
import { useFilters } from '../../helpers/hooks/useFilters';
import { selectQuestionsForQuiz } from '../../helpers/quiz/selectQuestions';
import { getAnswers } from '../../helpers/storage/quizAnswers';
import { useGetNewMockQuizQuery } from '../../redux/api/quizApi';
import { useGetSkillsQuery } from '../../redux/api/skills';
import { useGetSpecializationsQuery } from '../../redux/api/specializationApi';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { setQuestions } from '../../redux/quizSlice';
import styles from './styles.module.css';

export const PublicQuizPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { data: specializationsResponse } = useGetSpecializationsQuery();

  console.log(specializationsResponse);

  const specializations = specializationsResponse?.data ?? [];

  const { filters, updateFilters } = useFilters({
    selectedSpecialization: null,
    selectedSkills: [],
    selectedComplexity: [],
    selectedRate: [],
    searchValueByTitle: '',
    mode: 'Случайные',
  });

  const { data: skillsResponse } = useGetSkillsQuery({
    specializations: filters.selectedSpecialization?.id
      ? [filters.selectedSpecialization?.id]
      : undefined,
  });

  const skills = skillsResponse?.data ?? [];

  const [requestedCount, setRequestedCount] = useState<number | null>(null);

  const { data } = useGetNewMockQuizQuery({
    specialization: filters.selectedSpecialization?.id,
    skills: filters.selectedSkills.length
      ? filters.selectedSkills.map((s) => s.id)
      : undefined,
    complexity: filters.selectedComplexity.length
      ? filters.selectedComplexity
      : undefined,
    limit: 35,
  });

  const maxCount = data?.fullCount ?? 1;
  const currentCount =
    requestedCount === null ? maxCount : Math.min(requestedCount, maxCount);

  const dec = () =>
    setRequestedCount((prev) => Math.max(1, (prev ?? currentCount) - 1));
  const inc = () =>
    setRequestedCount((prev) => Math.min(maxCount, (prev ?? currentCount) + 1));

  console.log(data);

  const questions = data?.questions ?? [];

  console.log(filters.selectedSkills, '---skills');

  const handleStart = () => {
    if (!questions.length) return;

    const answers = getAnswers(); // ответы из localStorage

    const finalQuestions = selectQuestionsForQuiz(
      questions, // все вопросы с сервера
      answers, // ответы
      filters.mode, // выбранный режим
      currentCount, // сколько нужно
    );
    if (!finalQuestions.length) return;
    dispatch(setQuestions(finalQuestions));
    navigate(`/trainer/${finalQuestions[0].id}`);
  };

  return (
    <div className={styles.content}>
      <h2 className={styles.title}>Собеседование</h2>
      <div className={styles.quizFilters}>
        <section className={styles.columnLeft}>
          <FiltersSection title={'Выбор специализации'}>
            <FiltersList>
              {specializations.map((specialization) => (
                <FilterButton
                  key={specialization.id}
                  active={
                    filters.selectedSpecialization?.id === specialization?.id
                  }
                  onClick={() =>
                    toggleSpecialization(filters, updateFilters, specialization)
                  }
                >
                  {specialization.title}
                </FilterButton>
              ))}
            </FiltersList>
          </FiltersSection>
          <FiltersSection title={'Категории вопросов'}>
            <FiltersList>
              {skills.map((skill) => (
                <FilterButton
                  key={skill.id}
                  active={filters.selectedSkills.some((s) => s.id === skill.id)}
                  onClick={() => toggleSkill(filters, updateFilters, skill)}
                >
                  {skill.title}
                </FilterButton>
              ))}
            </FiltersList>
          </FiltersSection>
        </section>
        <section className={styles.columnRight}>
          <FiltersSection title={'Уровень сложности'}>
            <FiltersList>
              {Object.entries(COMPLEXITY_MAP).map(([range, complexity]) => {
                return (
                  <FilterButton
                    key={range}
                    active={complexity.every((num) =>
                      filters.selectedComplexity.includes(num),
                    )}
                    onClick={() =>
                      toggleComplexity(filters, updateFilters, complexity)
                    }
                  >
                    {range}
                  </FilterButton>
                );
              })}
            </FiltersList>
          </FiltersSection>
          <FiltersSection title={'Выберите режим'}>
            <FiltersList>
              {MODE_OPTIONS.map((mode) => (
                <FilterButton
                  key={mode}
                  active={filters.mode === mode}
                  onClick={() => updateFilters({ mode })}
                >
                  {mode}
                </FilterButton>
              ))}
            </FiltersList>
          </FiltersSection>
          <FiltersSection title={'Количество вопросов'}>
            <CounterButton
              dec={dec}
              inc={inc}
              currentCount={currentCount}
              maxCount={maxCount}
            />
          </FiltersSection>
        </section>
      </div>
      <div className={styles.bottomContainer}>
        <QuizStartButton onClick={handleStart} disabled={!questions.length} />
      </div>
    </div>
  );
};
