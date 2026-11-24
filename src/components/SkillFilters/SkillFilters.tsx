import { useState } from 'react';
import { fetchSkillsFromAPI } from '../../api/skills';
import { toggleSkill } from '../../helpers/filters/toggleFilters';
import { useFetch } from '../../helpers/hooks/useFetch';
import type { FiltersState } from '../../interfaces';
import { FilterButton } from '../FilterButton/FilterButton';
import { FiltersList } from '../FiltersList/FiltersList';
import { FiltersSection } from '../FiltersSection/FiltersSection';
import { ShowMoreButton } from '../ShowMoreButton/ShowMoreButton';

interface Props {
  filters: FiltersState;
  updateFilters: (updates: Partial<FiltersState>) => void;
}

export const SkillFilters = ({ filters, updateFilters }: Props) => {
  const [showAllSkills, setShowallSkills] = useState(false);

  const specializationIds = filters.selectedSpecialization
    ? [filters.selectedSpecialization.id]
    : [];

  const { data: skillsResponse } = useFetch(fetchSkillsFromAPI, {
    specializationIds,
  });

  const skills = skillsResponse?.data ?? [];

  const visibleSkills = showAllSkills ? skills : skills?.slice(0, 8);

  const hasMoreSkills = skills?.length > 8;

  return (
    <FiltersSection title={'Навыки'}>
      <FiltersList>
        {visibleSkills.map((skill) => (
          <FilterButton
            key={skill.id}
            active={filters.selectedSkills.some((s) => s.id === skill.id)}
            onClick={() => toggleSkill(filters, updateFilters, skill)}
          >
            {skill.title}
          </FilterButton>
        ))}
      </FiltersList>

      {hasMoreSkills && (
        <ShowMoreButton onClick={() => setShowallSkills(!showAllSkills)}>
          {showAllSkills ? 'Скрыть' : 'Посмотреть все'}
        </ShowMoreButton>
      )}
    </FiltersSection>
  );
};
