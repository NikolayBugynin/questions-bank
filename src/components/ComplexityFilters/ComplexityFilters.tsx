import { COMPLEXITY_MAP } from '../../constants/constants';
import type { FiltersState } from '../../interfaces';
import { FilterButton } from '../FilterButton/FilterButton';
import { FiltersList } from '../FiltersList/FiltersList';
import { FiltersSection } from '../FiltersSection/FiltersSection';

interface Props {
  filters: FiltersState;
  updateFilters: (updates: Partial<FiltersState>) => void;
}

export const ComplexityFilters = ({ filters, updateFilters }: Props) => {
  const toggleComplexity = (rangeValues: number[]) => {
    const prev = filters.selectedComplexity;
    const allSelected = rangeValues.every((num) => prev.includes(num));

    const newComplexity = allSelected
      ? prev.filter((num) => !rangeValues.includes(num))
      : [...new Set([...prev, ...rangeValues])].sort((a, b) => a - b);

    updateFilters({ selectedComplexity: newComplexity });
  };

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
              onClick={() => toggleComplexity(complexity)}
            >
              {range}
            </FilterButton>
          );
        })}
      </FiltersList>
    </FiltersSection>
  );
};
