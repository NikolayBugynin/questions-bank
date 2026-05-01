import axios from 'axios';
import type { SkillsData } from '../interfaces';

const API_BASE_URL = import.meta.env.VITE_API_URL;

interface ParamsType {
  specializationIds?: number[];
}

export const fetchSkillsFromAPI = async (
  params?: ParamsType,
): Promise<SkillsData> => {
  try {
    const { specializationIds = [] } = params || {};

    const url = `${API_BASE_URL}/skills`;
    // console.log('🔍 Полный URL:', `${url}?${params}`);

    const response = await axios.get(url, {
      params: {
        specializationIds,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Ошибка fetchSkillsFromAPI', error);
    throw error;
  }
};
