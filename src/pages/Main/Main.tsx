import { useState } from 'react';
import { fetchQuestionsFromAPI } from '../../api/questions';
import { FiltersBar } from '../../components/FiltersBar/FiltersBar';
import { QuestionsList } from '../../components/QuestionsList/QuestionsList';
import { Pagination } from '../../features/Pagination/Pagination';
import { useDebounce } from '../../helpers/hooks/useDebounce';
import { useFetch } from '../../helpers/hooks/useFetch';
import type { FiltersState } from '../../interfaces';
import './Main.css';

export const Main = () => {
  const [filters, setFilters] = useState<FiltersState>({
    selectedSpecialization: null,
    selectedSkill: null,
    selectedComplexity: [],
    selectedRate: [],
    searchValueByTitle: '',
  });

  const [currentPage, setCurrentPage] = useState(1);

  const [isOpenFilterBar, setIsOpenFilterBar] = useState(false);

  const skillIds = filters.selectedSkill ? [filters.selectedSkill.id] : [];

  const debouncedSearchText = useDebounce(filters.searchValueByTitle, 1500);

  const { data, isLoading } = useFetch(fetchQuestionsFromAPI, {
    page: currentPage,
    searchByTitle: debouncedSearchText,
    specializationId: filters.selectedSpecialization?.id,
    skillIds: skillIds,
    complexity: filters.selectedComplexity,
    rate: filters.selectedRate,
  });

  const updateFilters = (updates: Partial<FiltersState>) => {
    setFilters((prev) => ({ ...prev, ...updates }));
    setCurrentPage(1); // Сброс страницы при изменении фильтров
  };

  const filteredQuestions = data?.data;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) return <div className='loader'>Загрузка...</div>;

  const totalPages = Math.ceil((data?.total ?? 0) / (data?.limit ?? 1));

  return (
    <div className='main'>
      <div className='main-content'>
        <QuestionsList
          filteredQuestions={filteredQuestions}
          selectedSpecialization={filters.selectedSpecialization}
          setIsOpenFilterBar={setIsOpenFilterBar}
        />
        <FiltersBar
          filters={filters}
          updateFilters={updateFilters}
          isOpenFilterBar={isOpenFilterBar}
          setIsOpenFilterBar={setIsOpenFilterBar}
        />
      </div>
      <Pagination
        totalPages={totalPages}
        onPageChange={handlePageChange}
        initialPage={currentPage}
      />
    </div>
  );
};
