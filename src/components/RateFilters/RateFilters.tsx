import { RATE_VALUES } from '../../constants/constants';
import type { FiltersState } from '../../interfaces';
import { FilterButton } from '../FilterButton/FilterButton';
import { FiltersList } from '../FiltersList/FiltersList';
import { FiltersSection } from '../FiltersSection/FiltersSection';

interface Props {
  filters: FiltersState;
  updateFilters: (updates: Partial<FiltersState>) => void;
}

export const RateFilters = ({ filters, updateFilters }: Props) => {
  const toggleRate = (rateValue: number) => {
    const prev = filters.selectedRate;
    const newRate = prev.includes(rateValue)
      ? prev.filter((item) => item !== rateValue)
      : [...prev, rateValue].sort((a, b) => a - b);

    updateFilters({ selectedRate: newRate });
  };

  return (
    <FiltersSection title={'Рейтинг'}>
      <FiltersList>
        {RATE_VALUES.map((rate) => {
          return (
            <FilterButton
              key={rate}
              active={filters.selectedRate.includes(rate)}
              onClick={() => toggleRate(rate)}
            >
              {rate}
            </FilterButton>
          );
        })}
      </FiltersList>
    </FiltersSection>
  );
};
