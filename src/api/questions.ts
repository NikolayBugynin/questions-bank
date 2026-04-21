import axios from 'axios';
import type { QuestionData } from '../interfaces';

const API_BASE_URL = import.meta.env.VITE_API_URL;

interface ParamsType {
  page?: number;
  searchByTitle?: string;
  specializationId?: number;
  skillIds?: number[];
  complexity?: number[];
  rate?: number[];
  specializationIds?: number[];
}

export const fetchQuestionsFromAPI = async (
  params?: ParamsType,
): Promise<QuestionData> => {
  try {
    const {
      page = 1,
      searchByTitle = '',
      specializationId,
      skillIds = [],
      complexity = [],
      rate = [],
    } = params || {};

    const url = `${API_BASE_URL}/questions/public-questions`;

    const response = await axios.get(url, {
      params: {
        page,
        searchByTitle,
        specializationId,
        skillIds,
        complexity,
        rate,
      },
    });

    if (!response.data || !Array.isArray(response.data.data)) {
      throw new Error('API вернул неверный формат данных');
    }

    return response.data;
  } catch (error) {
    console.error('Ошибка fetchQuestionsFromAPI', error);
    throw error;
  }
};
