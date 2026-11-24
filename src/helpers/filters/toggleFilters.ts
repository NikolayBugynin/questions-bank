import type {
  FiltersState,
  Skill,
  Specialization,
  UpdateFilters,
} from '../../interfaces';

export const toggleSpecialization = (
  filters: FiltersState,
  updateFilters: UpdateFilters,
  specialization: Specialization,
) => {
  updateFilters({
    selectedSpecialization:
      filters.selectedSpecialization?.id === specialization.id
        ? null
        : specialization,
  });
};

export const toggleSkill = (
  filters: FiltersState,
  updateFilters: UpdateFilters,
  skill: Skill,
) => {
  const exists = filters.selectedSkills.some((s) => s.id === skill.id);

  updateFilters({
    selectedSkills: exists
      ? filters.selectedSkills.filter((s) => s.id !== skill.id)
      : [...filters.selectedSkills, skill],
  });
};

export const toggleComplexity = (
  filters: FiltersState,
  updateFilters: UpdateFilters,
  rangeValues: number[],
) => {
  const prev = filters.selectedComplexity;
  const allSelected = rangeValues.every((num) => prev.includes(num));

  const newComplexity = allSelected
    ? prev.filter((num) => !rangeValues.includes(num))
    : [...new Set([...prev, ...rangeValues])].sort((a, b) => a - b);

  updateFilters({ selectedComplexity: newComplexity });
};
