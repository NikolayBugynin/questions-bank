import type { MODE_OPTIONS, STATUS_OPTIONS } from '../constants/constants';

export interface Skill {
  id: number;
  title?: string;
}

export interface SkillsData {
  data: Skill[];
}

export interface Specialization {
  id: number;
  title: string;
  slug: string;
}

interface Author {
  id: number;
  username: string;
}

export interface Question {
  id: number;
  title: string;
  description: string;
  complexity: number;
  rate: number;
  longAnswer: string;
  shortAnswer: string;
  keywords: string[];
  questionSkills: Skill[];
  updatedBy: Author;
}

export interface QuestionData {
  data: Question[];
  page: number;
  limit: number;
  total: number;
}

export type QuizMode = 'Повторение' | 'Только новые' | 'Случайные';

export interface FiltersState {
  selectedSpecialization: Specialization | null;
  selectedSkills: Skill[];
  selectedComplexity: number[];
  selectedRate: number[];
  searchValueByTitle: string;
  mode: QuizMode;
}

export type UpdateFilters = (updates: Partial<FiltersState>) => void;

export type PaginatedResponse<T> = {
  data: T[];
  page: number;
  limit: number;
  total: number;
};

export type Status = (typeof STATUS_OPTIONS)[number];

export type Mode = (typeof MODE_OPTIONS)[number];
