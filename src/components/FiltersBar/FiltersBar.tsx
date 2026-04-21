import { useState } from 'react';
import { fetchSkillsFromAPI } from '../../api/skills';
import { fetchSpecializationsFromAPI } from '../../api/specializations';
import closeBtn from '../../assets/images/close_btn.svg';
import searchIcon from '../../assets/images/search-icon.svg';
import { useFetch } from '../../helpers/hooks/useFetch';
import type { FiltersState, Skill, Specialization } from '../../interfaces';
import './FiltersBar.css';

interface Props {
  filters: FiltersState;
  updateFilters: (updates: Partial<FiltersState>) => void;
  isOpenFilterBar: boolean;
  setIsOpenFilterBar: (value: boolean) => void;
}
export const FiltersBar = ({
  filters,
  updateFilters,
  isOpenFilterBar,
  setIsOpenFilterBar,
}: Props) => {
  const [showAllSpecializations, setShowallSpecializations] = useState(false);
  const [showAllSkills, setShowallSkills] = useState(false);

  const { data: specializationsData } = useFetch(fetchSpecializationsFromAPI);

  const specializations = specializationsData ?? [];

  const specializationIds = filters.selectedSpecialization
    ? [filters.selectedSpecialization.id]
    : [];

  const { data: skillsResponse } = useFetch(fetchSkillsFromAPI, {
    specializationIds,
  });

  const skills = skillsResponse?.data ?? [];

  const handleSearchChange = (value: string) => {
    updateFilters({ searchValueByTitle: value });
  };

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

  const toggleSkill = (skill: Skill) => {
    updateFilters({
      selectedSkill: filters.selectedSkill?.id === skill.id ? null : skill,
    });
  };

  const visibleSkills = showAllSkills ? skills : skills?.slice(0, 8);

  const hasMoreSkills = skills?.length > 8;

  const toggleComplexity = (rangeValues: number[]) => {
    const prev = filters.selectedComplexity;
    const allSelected = rangeValues.every((num) => prev.includes(num));

    const newComplexity = allSelected
      ? prev.filter((num) => !rangeValues.includes(num))
      : [...new Set([...prev, ...rangeValues])].sort((a, b) => a - b);

    updateFilters({ selectedComplexity: newComplexity });
  };

  const toggleRate = (rateValue: number) => {
    const prev = filters.selectedRate;
    const newRate = prev.includes(rateValue)
      ? prev.filter((item) => item !== rateValue)
      : [...prev, rateValue].sort((a, b) => a - b);

    updateFilters({ selectedRate: newRate });
  };

  const complexityMap: Record<string, number[]> = {
    '1-3': [1, 2, 3],
    '4-6': [4, 5, 6],
    '7-8': [7, 8],
    '9-10': [9, 10],
  };

  return (
    <div className={`filtersBar ${isOpenFilterBar ? 'open' : ''}`}>
      <button
        onClick={() => setIsOpenFilterBar(false)}
        className='filtersBar-closeBtn'
      >
        <img src={closeBtn} alt='' />
      </button>
      <div className='filtersBar__content'>
        <div className='search__container'>
          <img className='search__icon' src={searchIcon} alt='' />
          <input
            type='text'
            className='search__input'
            placeholder='Введите запрос…'
            value={filters.searchValueByTitle}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
        </div>
        <div className='filters__items'>
          <h4 className='filters__items-title'>Специализация</h4>
          <div className='filters__items-list'>
            {visibleSpecializations.map((specialization) => (
              <button
                key={specialization.id}
                className={`filters__item ${filters.selectedSpecialization?.id === specialization?.id ? 'active' : ''}`}
                onClick={() => toggleSpecialization(specialization)}
              >
                {specialization.title}
              </button>
            ))}
          </div>

          {hasMoreSpecializations && (
            <button
              className='filters__toggle'
              onClick={() => setShowallSpecializations(!showAllSpecializations)}
            >
              {showAllSpecializations ? 'Скрыть' : ' Посмотреть все'}
            </button>
          )}
        </div>
        <div className='filters__items'>
          <h4 className='filters__items-title'>Навыки</h4>
          <div className='filters__items-list'>
            {visibleSkills.map((skill) => (
              <button
                key={skill.id}
                className={`filters__item ${filters.selectedSkill?.id === skill?.id ? 'active' : ''}`}
                onClick={() => toggleSkill(skill)}
              >
                {skill.title}
              </button>
            ))}
          </div>
          {hasMoreSkills && (
            <button
              className='filters__toggle'
              onClick={() => setShowallSkills(!showAllSkills)}
            >
              {showAllSkills ? 'Скрыть' : 'Посмотреть все'}
            </button>
          )}
        </div>
        {/* complexity */}
        <div className='filters__items'>
          <h4 className='filters__items-title'>Уровень сложности</h4>
          <ul className='filters__items-list'>
            {Object.entries(complexityMap).map(([range, complexity]) => {
              const isActive = complexity.every((num) =>
                filters.selectedComplexity.includes(num),
              );

              return (
                <button
                  key={range}
                  className={`filters__item ${isActive ? 'active' : ''}`}
                  onClick={() => toggleComplexity(complexity)}
                >
                  {range}
                </button>
              );
            })}
          </ul>
        </div>
        <div className='filters__items'>
          <h4 className='filters__items-title'>Рейтинг</h4>
          <ul className='filters__items-list'>
            {[1, 2, 3, 4, 5].map((rate) => {
              const isActive = filters.selectedRate.includes(rate);
              return (
                <button
                  key={rate}
                  className={`filters__item ${isActive ? 'active' : ''}`}
                  onClick={() => toggleRate(rate)}
                >
                  {rate}
                </button>
              );
            })}
          </ul>
        </div>
        <div className='filters__items'>
          <h4 className='filters__items-title'>Статус</h4>
          <ul className='filters__items-list'>
            {['Изученные', 'Не изученные', 'Все'].map((status) => (
              <button key={status} className='filters__item'>
                {status}
              </button>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
