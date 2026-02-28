/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { fetchQuestionsFromAPI, type QuestionData } from '../api/questions';

export const useQuestions = (
  page: number,
  searchByTitle: string,
  specializationId?: number,
  skillIds: number[] = [],
  complexity: number[] = [],
  rate: number[] = [],
) => {
  const [questionData, setQuestionData] = useState<QuestionData>({
    data: [],
    page: 1,
    limit: 10,
    total: 0,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const data = await fetchQuestionsFromAPI(
          page,
          searchByTitle,
          specializationId,
          skillIds,
          complexity,
          rate,
        );

        setQuestionData(data);
      } catch (error) {
        console.error('Ошибка Eror:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [
    page,
    searchByTitle,
    specializationId,
    skillIds.join(','),
    complexity.join(','),
    rate.join(','),
  ]);

  return { questionData, loading };
};
