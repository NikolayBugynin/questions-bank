import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL;

export interface Skill {
  id: number;
  title: string;
}

export interface SkillsResponse {
  data: Skill[];
}

export const fetchSkillsFromAPI = async (
  specializationIds: number[] = [],
): Promise<SkillsResponse> => {
  try {
    const params = new URLSearchParams();

    params.append('limit', '100');

    if (specializationIds.length > 0) {
      params.append('specializations', specializationIds.join(','));
      // [1, 2, 3] -> "1,2,3"
    }

    const url = `${API_BASE_URL}/skills`;
    // console.log('🔍 Полный URL:', `${url}?${params}`);

    const response = await axios.get(url, { params });

    return response.data;
  } catch (error) {
    console.error('Ошибка fetchSkillsFromAPI', error);
    throw error;
  }
};
