import axios from 'axios';

export interface Question {
  id: number;
  title: string;
  description: string;
  complexity: number;
  rate: number;
}

export interface QuestionData {
  data: Question[];
  page: number;
  limit: number;
  total: number;
}

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const fetchQuestionsFromAPI = async (
  page: number = 1,
  searchByTitle: string = '',
  specializationId?: number,
  skillIds: number[] = [],
  complexity: number[] = [],
  rate: number[] = [],
): Promise<QuestionData> => {
  try {
    const params = new URLSearchParams();

    params.append('page', page.toString());

    if (searchByTitle.trim()) {
      params.append('title', searchByTitle.trim());
    }

    if (specializationId !== undefined) {
      params.append('specializationId', specializationId.toString());
    }

    if (skillIds.length > 0) {
      params.append('skills', skillIds.join(','));
    }

    if (complexity.length > 0) {
      params.append('complexity', complexity.join(','));
    }

    if (rate.length > 0) {
      params.append('rate', rate.join(','));
    }

    const url = `${API_BASE_URL}/questions/public-questions`;

    console.log('🔍 Полный URL:', `${url}?${params}`);
    const response = await axios.get(url, { params });

    if (!response.data || !Array.isArray(response.data.data)) {
      throw new Error('API вернул неверный формат данных');
    }

    return response.data;
  } catch (error) {
    console.error('Ошибка fetchQuestionsFromAPI', error);
    throw error;
  }
};
