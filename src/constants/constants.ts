import type { Status } from '../interfaces';

export const MENU_ITEMS = [
  { to: '/', label: 'База вопросов' },
  { to: '/trainer', label: 'Тренажёр' },
  { to: '/materials', label: 'Материалы' },
  { to: '/skills', label: 'Навыки (hh)' },
] as const;

export const COMPLEXITY_MAP: Record<string, number[]> = {
  '1-3': [1, 2, 3],
  '4-6': [4, 5, 6],
  '7-8': [7, 8],
  '9-10': [9, 10],
};

export const STATUS_OPTIONS: Status[] = ['Изученные', 'Не изученные', 'Все'];

export const RATE_VALUES = [1, 2, 3, 4, 5] as const;
