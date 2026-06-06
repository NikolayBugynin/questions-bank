import axios from 'axios';
import type { QuestionData } from '../interfaces';

const API_BASE_URL = import.meta.env.VITE_API_URL;

interface ParamsType {
  page?: number;
  titleOrDescription?: string;
  specializationId?: number;
  skills?: number[];
  complexity?: number[];
  rate?: number[];
  specializationIds?: number[];
  keywords?: string[];
}

export const fetchQuestionsFromAPI = async (
  params?: ParamsType,
): Promise<QuestionData> => {
  try {
    const {
      page = 1,
      titleOrDescription = '',
      specializationId,
      skills = [],
      complexity = [],
      rate = [],
      keywords = [],
    } = params || {};

    const url = `${API_BASE_URL}/questions/public-questions`;

    const response = await axios.get(url, {
      params: {
        page,
        titleOrDescription,
        specializationId,
        skills,
        complexity,
        rate,
        keywords,
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
