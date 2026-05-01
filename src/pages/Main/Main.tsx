import { useState } from 'react';
import { fetchQuestionsFromAPI } from '../../api/questions';
import { FiltersBar } from '../../components/FiltersBar/FiltersBar';
import { QuestionsList } from '../../components/QuestionsList/QuestionsList';
import { useDebounce } from '../../helpers/hooks/useDebounce';
import { useFetch } from '../../helpers/hooks/useFetch';
import { useFilters } from '../../helpers/hooks/useFilters';
import type { FiltersState } from '../../interfaces';
import styles from './styles.module.css';

export const Main = () => {
  const { filters, updateFilters } = useFilters({
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
    titleOrDescription: debouncedSearchText,
    specializationId: filters.selectedSpecialization?.id,
    skillIds: skillIds,
    complexity: filters.selectedComplexity,
    rate: filters.selectedRate,
  });

  const handleUpdateFilters = (updates: Partial<FiltersState>) => {
    updateFilters(updates);
    setCurrentPage(1);
  };

  const filteredQuestions = data?.data;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil((data?.total ?? 0) / (data?.limit ?? 1));

  return (
    <main className={styles.main}>
      <QuestionsList
        isLoading={isLoading}
        filteredQuestions={filteredQuestions}
        selectedSpecialization={filters.selectedSpecialization}
        setIsOpenFilterBar={setIsOpenFilterBar}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />

      <FiltersBar
        filters={filters}
        updateFilters={handleUpdateFilters}
        isOpenFilterBar={isOpenFilterBar}
        setIsOpenFilterBar={setIsOpenFilterBar}
      />
    </main>
  );
};
