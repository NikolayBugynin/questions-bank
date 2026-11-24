import { COMPLEXITY_MAP } from '../../constants/constants';
import { toggleComplexity } from '../../helpers/filters/toggleFilters';
import type { FiltersState } from '../../interfaces';
import { FilterButton } from '../FilterButton/FilterButton';
import { FiltersList } from '../FiltersList/FiltersList';
import { FiltersSection } from '../FiltersSection/FiltersSection';

interface Props {
  filters: FiltersState;
  updateFilters: (updates: Partial<FiltersState>) => void;
}

export const ComplexityFilters = ({ filters, updateFilters }: Props) => {
  return (
    <FiltersSection title={'Уровень сложности'}>
      <FiltersList>
        {Object.entries(COMPLEXITY_MAP).map(([range, complexity]) => {
          return (
            <FilterButton
              key={range}
              active={complexity.every((num) =>
                filters.selectedComplexity.includes(num),
              )}
              onClick={() =>
                toggleComplexity(filters, updateFilters, complexity)
              }
            >
              {range}
            </FilterButton>
          );
        })}
      </FiltersList>
    </FiltersSection>
  );
};
