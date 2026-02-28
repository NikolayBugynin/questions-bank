import { useState } from 'react';
import type { Skill } from '../../api/skills';
import bulletImg from '../../assets/images/bullet.svg';
import expBtn from '../../assets/images/expand-button.svg';
import filterBtn from '../../assets/images/filter-btn.svg';
import itImg from '../../assets/images/it-pic.png';
import { Pagination } from '../../features/Pagination/Pagination';
import { useQuestions } from '../../hooks/useQuestions';
import type { Specialization } from '../../hooks/useSpecializations';
import './Main.css';

interface MainProps {
  searchValueByTitle: string;
  selectedSpecialization: Specialization | null;
  setCurrentPage: (page: number) => void;
  currentPage: number;
  selectedSkill: Skill | null;
  selectedComplexity: number[];
  selectedRate: number[];
  setIsOpenFilterBar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Main = ({
  searchValueByTitle,
  selectedSpecialization,
  setCurrentPage,
  currentPage,
  selectedSkill,
  selectedComplexity,
  selectedRate,
  setIsOpenFilterBar,
}: MainProps) => {
  const [openQuestionId, setOpenQuestionId] = useState<number | null>(null);

  const toggleQuestion = (questionId: number) => {
    setOpenQuestionId((prev) => (prev === questionId ? null : questionId));
  };

  const skillIds = selectedSkill ? [selectedSkill.id] : [];

  const { questionData, loading } = useQuestions(
    currentPage,
    searchValueByTitle,
    selectedSpecialization?.id,
    skillIds,
    selectedComplexity,
    selectedRate,
  );

  // console.log('---questionData', questionData);

  if (loading) return <div className='loader'>Загрузка...</div>;

  const filteredQuestions = questionData.data;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(questionData.total / questionData.limit);

  return (
    <div className='questions__content'>
      <div className='questions__title-container'>
        <h2 className='questions__title'>
          Вопросы {selectedSpecialization?.title}
        </h2>
        <button
          onClick={() => setIsOpenFilterBar(true)}
          className='questions__title-filterBtn'
        >
          <img src={filterBtn} alt='Кнопка для открытия фильтра вопросов' />
        </button>
      </div>

      <div className='questions__list'>
        {filteredQuestions.map((question) => {
          const isOpen = openQuestionId === question.id;
          return (
            <div
              key={question.id}
              className='questions__item'
              onClick={() => toggleQuestion(question.id)}
            >
              <div className='questions__item-header'>
                <div className='questions__item-header-container'>
                  <img
                    className='questions__item-bullet'
                    src={bulletImg}
                    alt='Точка радям с заголовком'
                  />
                  <h3 className='questions__item-title'>{question.title}</h3>
                </div>
                <button className='expand-btn'>
                  <span className={`arrow ${isOpen ? 'arrow--open' : ''}`}>
                    <img src={expBtn} alt='expBtn' />
                  </span>
                </button>
              </div>

              {isOpen && (
                <div className='questions__item-expand-container'>
                  <div className='questions__item-meta'>
                    <div className='questions__item-stat'>
                      <span className='questions__item-stat-label'>
                        Рейтинг:
                      </span>
                      <span className='questions__item-stat-value'>
                        {question.rate}
                      </span>
                    </div>
                    <div className='questions__item-stat'>
                      <span className='questions__item-stat-label'>
                        Сложность:
                      </span>
                      <span className='questions__item-stat-value'>
                        {question.complexity}
                      </span>
                    </div>
                  </div>
                  <img
                    className='questions__item-image'
                    src={itImg}
                    alt='скрин кода'
                  />
                  <p className='questions__item-description'>
                    {question.description}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <Pagination
        totalPages={totalPages}
        onPageChange={handlePageChange}
        initialPage={currentPage}
      />
    </div>
  );
};
