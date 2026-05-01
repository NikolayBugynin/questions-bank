import { useState } from 'react';
import { fetchSpecializationsFromAPI } from '../../api/specializations';
import { useFetch } from '../../helpers/hooks/useFetch';
import type { FiltersState, Specialization } from '../../interfaces';
import { FilterButton } from '../FilterButton/FilterButton';
import { FiltersList } from '../FiltersList/FiltersList';
import { FiltersSection } from '../FiltersSection/FiltersSection';
import { ShowMoreButton } from '../ShowMoreButton/ShowMoreButton';

interface Props {
  filters: FiltersState;
  updateFilters: (updates: Partial<FiltersState>) => void;
}

export const SpecializationFilters = ({ filters, updateFilters }: Props) => {
  const [showAllSpecializations, setShowallSpecializations] = useState(false);

  const { data: specializationsData } = useFetch(fetchSpecializationsFromAPI);

  const specializations = specializationsData ?? [];

  const toggleSpecialization = (specialization: Specialization) => {
    updateFilters({
      selectedSpecialization:
        filters.selectedSpecialization?.id === specialization.id
          ? null
          : specialization,
    });
  };

  const visibleSpecializations = showAllSpecializations
    ? specializations
    : specializations.slice(0, 5);

  const hasMoreSpecializations = specializations.length > 5;
  return (
    <FiltersSection title={'Специализация'}>
      <FiltersList>
        {visibleSpecializations.map((specialization) => (
          <FilterButton
            key={specialization.id}
            active={filters.selectedSpecialization?.id === specialization?.id}
            onClick={() => toggleSpecialization(specialization)}
          >
            {specialization.title}
          </FilterButton>
        ))}
      </FiltersList>
      {hasMoreSpecializations && (
        <ShowMoreButton
          onClick={() => setShowallSpecializations(!showAllSpecializations)}
        >
          {showAllSpecializations ? 'Скрыть' : ' Посмотреть все'}
        </ShowMoreButton>
      )}
    </FiltersSection>
  );
};
