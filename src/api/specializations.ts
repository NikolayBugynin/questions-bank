import axios from 'axios';
import type { Specialization } from '../interfaces';

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const fetchSpecializationsFromAPI = async (): Promise<
  Specialization[]
> => {
  try {
    const url = `${API_BASE_URL}/specializations?limit=100`;

    const response = await axios.get(url);

    return response.data.data;
  } catch (error) {
    console.error('Ошибка fetchSpecializationsFromAPI', error);
    throw error;
  }
};
