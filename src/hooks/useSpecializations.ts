import { useEffect, useState } from 'react';
import { fetchSpecializationsFromAPI } from '../api/specializations';

export interface Specialization {
  id: number;
  title: string;
  slug: string;
}

export const useSpecializations = () => {
  const [specializations, setSpecializations] = useState<Specialization[]>([]);

  useEffect(() => {
    const fetchSpecializations = async () => {
      try {
        const data = await fetchSpecializationsFromAPI();

        setSpecializations(data);
      } catch (error) {
        console.error();
        throw error;
      }
    };

    fetchSpecializations();
  }, []);
  return { specializations };
};
