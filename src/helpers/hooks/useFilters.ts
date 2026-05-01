import { useState } from 'react';
import type { FiltersState } from '../../interfaces';

export const useFilters = (initialFilters: FiltersState) => {
  const [filters, setFilters] = useState<FiltersState>(initialFilters);

  const updateFilters = (updates: Partial<FiltersState>) => {
    setFilters((prev) => ({ ...prev, ...updates }));
  };

  return { filters, updateFilters };
};
