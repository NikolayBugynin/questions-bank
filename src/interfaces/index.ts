export interface Skill {
  id: number;
  title: string;
}

export interface SkillsData {
  data: Skill[];
}

export interface Specialization {
  id: number;
  title: string;
  slug: string;
}

export interface Question {
  id: number;
  title: string;
  description: string;
  complexity: number;
  rate: number;
}

export interface QuestionData {
  data: Question[];
  page: number;
  limit: number;
  total: number;
}

export interface FiltersState {
  selectedSpecialization: Specialization | null;
  selectedSkill: Skill | null;
  selectedComplexity: number[];
  selectedRate: number[];
  searchValueByTitle: string;
}

export type Status = 'Изученные' | 'Не изученные' | 'Все';
