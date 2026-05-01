import { useState } from 'react';
import { STATUS_OPTIONS } from '../../constants/constants';
import { FilterButton } from '../FilterButton/FilterButton';
import { FiltersList } from '../FiltersList/FiltersList';
import { FiltersSection } from '../FiltersSection/FiltersSection';

export const StatusFilters = () => {
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  return (
    <FiltersSection title={'Статус'}>
      <FiltersList>
        {STATUS_OPTIONS.map((status) => (
          <FilterButton
            key={status}
            active={selectedStatus === status}
            onClick={() => setSelectedStatus(status)}
          >
            {status}
          </FilterButton>
        ))}
      </FiltersList>
    </FiltersSection>
  );
};
