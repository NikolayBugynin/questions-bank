import axios from 'axios';
import type { Question } from '../interfaces';

const API_BASE_URL = import.meta.env.VITE_API_URL;

interface ParamsType {
  id: number;
}

export const fetchQuestionById = async (
  params?: ParamsType,
): Promise<Question> => {
  try {
    const { id } = params || {};

    if (!id) {
      throw new Error('ID вопроса обязателен');
    }

    const url = `${API_BASE_URL}/questions/public-questions/${id}`;
    const response = await axios.get(url);

    if (!response.data) {
      throw new Error('Api вернул неверный формат данных');
    }

    return response.data;
  } catch (error) {
    console.error('Ошибка fetchQuestionByIdFromAPI', error);
    throw error;
  }
};
