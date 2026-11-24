import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchQuestionsFromAPI } from '../../api/questions';
import { FiltersBar } from '../../components/FiltersBar/FiltersBar';
import { QuestionsList } from '../../components/QuestionsList/QuestionsList';
import { useDebounce } from '../../helpers/hooks/useDebounce';
import { useFetch } from '../../helpers/hooks/useFetch';
import { useFilters } from '../../helpers/hooks/useFilters';
import type { FiltersState } from '../../interfaces';

export const Main = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  //skillId
  const skillIdParam = searchParams.get('skillId');
  const skillId = skillIdParam ? Number(skillIdParam) : null;

  //keyWordParam
  const keyWordParam = searchParams.get('keyWord');

  const { filters, updateFilters } = useFilters({
    selectedSpecialization: null,
    selectedSkills: [],
    selectedComplexity: [],
    selectedRate: [],
    searchValueByTitle: '',
  });

  const [currentPage, setCurrentPage] = useState(1);

  const [isOpenFilterBar, setIsOpenFilterBar] = useState(false);

  //  очищаем URL
  useEffect(() => {
    if (!skillIdParam && !keyWordParam) return;

    const next = new URLSearchParams(searchParams);
    next.delete('skillId');
    next.delete('keyWord');
    setSearchParams(next, { replace: true });
  }, [skillIdParam, keyWordParam, searchParams, setSearchParams]);

  const skillsIds = [
    ...filters.selectedSkills.map((s) => s.id),
    ...(skillId ? [skillId] : []),
  ];

  console.log(skillsIds, '---skillsIds');

  const debouncedSearchText = useDebounce(filters.searchValueByTitle, 1500);

  const { data, isLoading } = useFetch(fetchQuestionsFromAPI, {
    page: currentPage,
    titleOrDescription: debouncedSearchText,
    specializationId: filters.selectedSpecialization?.id,
    skills: skillsIds,
    complexity: filters.selectedComplexity,
    rate: filters.selectedRate,
    keywords: keyWordParam ? [keyWordParam] : [],
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
    <>
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
    </>
  );
};
