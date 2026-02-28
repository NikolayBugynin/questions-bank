

import { useEffect, useState } from 'react';
import { fetchSkillsFromAPI, type Skill } from './../api/skills';

export const useSkills = (specializationIds: number[] = []) => {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const data = await fetchSkillsFromAPI(specializationIds);
        setSkills(data.data);
      } catch (error) {
        console.error('Ошибка fetchSkillsFromAPI', error);
      }
    };

    fetchSkills();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [specializationIds.join(',')]);

  return { skills };
};
